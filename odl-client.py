#!/usr/bin/env python

'''
Usage:
odl-client [<url> <user> <password>]
'''
import sys
sys.path.append('python-odl-0.0.1')
from odl.instance import ODLInstance
from odl.topology import ODLTopology
from odl.node import ODLNode
from docopt import docopt
import re
import cmd
import json
import uuid
import shlex
import pprint
import socket

class ConfigurationError(Exception):
    def __init__(self, num, key, dir_list):
        self.num = num
        self.key = key
        self.dir = "/" + "/".join(dir_list)

    def __str__(self):
        return "No such path through config at pos: %d %s in %s" %\
            (self.num, self.key, self.dir)

class col:
    HEADER = '\033[35m'# PINK
    DIR = '\033[34m' # BLUE
    ITEM = '\033[37m' # LGRAY
    PROMPT = '\033[32m' # GREEN
    WARNING = '\033[33m' # YELLOW
    FAIL = '\033[31m' # RED
    ENDC = '\033[39m' # BLACK

class Util():
    def get_string(self, disp_str, dval):
        val = raw_input(disp_str)
        if len(str(val)):
            return str(val)
        else:
            return dval

    def get_int(self, disp_str, dval):
        val = raw_input(disp_str)
        try:
            rval = int(val)
            return rval
        except:
            return dval

    def get_real(self, disp_str, dval):
        val = raw_input(disp_str)
        try:
            rval = float(val)
            return rval
        except:
            return dval
    
class ODLCmd(cmd.Cmd):
    def __init__(self, url, user, pw):
        self.prompt = col.PROMPT + "odl-client> " + col.ENDC
        self.config = {}
        self.cwc = self.config
        self.cwd_list = []
        self.odl = ODLInstance(url, (user, pw))
        self.util = Util()
        self.node = None
        self.pp = pprint.PrettyPrinter(indent=1, width=80, depth=None, stream=None)
        cmd.Cmd.__init__(self)

    def emptyline(self):
        pass
        
    def do_cd(self, path):
        '''Change the current level of view of the config to be at <key>
        cd <key>'''
        if path=="" or path[0]=="/":
            new_wd_list = path[1:].split("/")
        else:
            new_wd_list = self.cwd_list + path.split("/")
        try:
            cwc, new_wd_list = self._conf_for_list(new_wd_list)
        except ConfigurationError as e:
            print col.FAIL + str(e) + col.ENDC
            return
        self.cwd_list = new_wd_list
        self.cwc = cwc

    def complete_cd(self, text, l, b, e):
        return [ x[b-3:] for x,y in self.cwc.iteritems() if x.startswith(l[3:])]

    def do_ls(self, key):
        '''Show the top level of the current working config, or top level of config under [key]
        ls [key]'''
        conf = self.cwc
        if key:
            try:
                conf = conf[key]
            except KeyError:
                print "No such key %s" % key
                return

        try:
            for k,v in conf.iteritems():
                if isinstance(v, ODLNode):
                    try:
                        hostname = socket.gethostbyaddr(v.ip_address)[0]
                    except:
                        hostname = v.ip_address
                    print col.DIR + k + col.ENDC + ": (\"%s\", \"%s\", \"%s\")" % \
                    (hostname, v.description, v.manufacturer)
                elif isinstance(v, dict) or isinstance(v, list):
                    print col.DIR + k + col.ENDC
                else:
                    print "%s: %s" % (k, v)
        except:
            print "%s" % conf

    def complete_ls(self, text, l, b, e):
        return [ x[b-3:] for x,y in self.cwc.iteritems() if x.startswith(l[3:]) ]

    def do_lsd(self, key):
        '''Show all config from current level down... or all config under [key]
        lsd [key]'''
        conf = self.cwc
        if key:
            try:
                conf = conf[key]
            except KeyError:
                print "No such key %s" % key
        self.pp.pprint(conf)

    def complete_lsd(self, text, l, b, e):
        return [ x for x,y in self.cwc.iteritems()
                 if isinstance(y, dict) and x.startswith(text) ]

    def do_pwd(self, key):
        '''Show current path in config separated by slashes
        pwd'''
        print "/" + "/".join(self.cwd_list)

    def do_get_nodes(self, args):
        '''Get all or a specific node from ODL
        get_nodes [node]'''
        try:
            nodes = self.odl.get_nodes()
            self.config = nodes
            self._set_cwc()
        except Exception as e:
            print "Error: %s" % e

    def do_get_topo(self, args):
        '''Get ODL topology'''
        try:
            t = ODLTopology(None, None, self.odl)
            topo = t.get_topology()
            self.config = topo
            self._set_cwc()
        except Exception as e:
            print "Error: %s" % e

    def do_del_flow(self, args):
        #if not self.cwd_list[:-3] == "tables":
            
            
    def do_add_flow(self, args):
        '''Add a flow, will prompt for user input'''
        if not self.node:
            print col.FAIL + "No ODL node selected!" + col.ENDC
            return

        fid = self.util.get_string("Flow ID: ", str(uuid.uuid4()))
        table = self.util.get_int("Table: ", None)
        eth_type = self.util.get_int("Eth type: ", None)
        vlan = self.util.get_int("vlan: ", None)
        inp = self.util.get_string("in-port: ", None)
        outp = self.util.get_string("out-port: ", None)

        flow = {
            'flow': {
                'barrier': False,
                'cookie': 0,
                'id': fid,
                'idle-timeout': 0,
                'hard-timeout': 0,
                'instructions': {
                    'instruction': [{
                        'apply-actions': {
                            'action': [{
                                'order': 1,
                                'push-vlan-action': {
                                    'ethernet-type': eth_type}},
                                       {
                                           'order': 2,
                                           'set-field': {
                                               'vlan-match': {
                                                   'vlan-id': {'vlan-id': vlan,
                                                               'vlan-id-present': True}}}},
                                       {'order': 0,
                                        'output-action': {'max-length': 0,
                                                          'output-node-connector': outp}}]},
                        'order': 0}]},
                'match': {'ethernet-match': {'ethernet-type': {'type': 33024}},
                          'vlan-match': {'vlan-id': {'vlan-id': vlan,
                                                     'vlan-id-present': True}}},
                'priority': 500,
                'table_id': 0
            }
        }
        self.pp.pprint(flow)
        try:
            self.odl.put_flow(flow, self.node.id, table, fid)
        except Exception, e:
            print "Error pushing flow: %s" % e
        
    def do_EOF(self, line):
        return True

    def _val_from_input(self, inp):
        '''Take user input, and try to convert it to JSON appropriate
        python values.
        '''
        val = inp
        try:
            val = int(inp)
            return val
        except Exception:
            val = inp
        if val == "false":
            return False
        if val == "true":
            return True
        if (val[0] == "'" and val[-1] == "'") or\
                (val[0] == '"' and val[-1] == '"'):
            return val[1:-1]
        return val

    def _set_cwc(self):
        '''Set the current working configuration to what it should be
        based on the cwd_list. If the path doesn't exist, set cwc to
        the top level and clear the cwd_list.
        '''
        try:
            self.cwc, self.cwd_list = self._conf_for_list()
            self.pp.pprint(self.cwc)
        except ConfigurationError:
            self.cwc = self.config
            self.cwd_list = []

    def _conf_for_list(self, cwd_list=None):
        '''Takes in a list representing a path through the config
        returns a tuple containing the current working config, and the
        "collapsed" final path (meaning it has no .. entries.
        '''
        if not cwd_list:
            cwd_list = self.cwd_list
        cwc_stack = []
        cwc = self._odl_to_dict(self.config, None)
        num = 0
        for kdir in cwd_list:
            if kdir == "":
                continue
            num += 1
            if kdir == ".." and cwc_stack:
                cwc = cwc_stack.pop()[0]
                continue
            elif kdir == "..":
                continue
            try:
                ocwc = cwc
                cwc = self._odl_to_dict(cwc[kdir], kdir)
                cwc_stack.append((ocwc, kdir))
            except KeyError:
                raise ConfigurationError(num, kdir, cwd_list)
        return (cwc, [ x[1] for x in cwc_stack ])

    def _odl_to_dict(self, cfg, k):
        if k and hasattr(cfg, "to_dict"):
            if isinstance(cfg, ODLNode):
                self.node = cfg
            cfg = cfg.to_dict()[k]

        if isinstance(cfg, list):
            new = {}
            for d in cfg:
                if "id" in d:
                    new[str(d['id'])] = d
                else:
                    for k, v in d.items():
                        new[str(k)] = v
            cfg = new
        return cfg

if __name__ == '__main__':
    args = docopt(__doc__, version='odl-client 0.1')
    url = args.get("<url>")
    if not url:
        url = "http://odl.scinet.ncsa.edu:8181"

    user = args.get("<user>")
    if not user:
        user = "admin"

    pw = args.get("<password>")
    if not pw:
        pw = "admin"

    info =\
"""Server: %s
User  : %s
Passwd: %s\n""" % (url, user, "*****" if pw != "admin" else pw)
    print info
    
    odlc = ODLCmd(url, user, pw)
    odlc.cmdloop()
