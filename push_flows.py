#!/usr/bin/env python

'''
Usage:
push_flows [<flow_file> <url> <user> <password>]
'''
import sys
sys.path.append('python-odl-0.0.1')
from odl.instance import ODLInstance
from odl.topology import ODLTopology
from odl.node import ODLNode
from docopt import docopt
import json

if __name__ == '__main__':
    args = docopt(__doc__, version='odl-client 0.1')
    url = args.get("<url>")
    if not url:
        url = "http://localhost:8181"
        
    user = args.get("<user>")
    if not user:
        user = "admin"

    pw = args.get("<password>")
    if not pw:
        pw = "admin"

    ffile = args.get("<flow_file>")
        
    info =\
"""File  : %s
Server: %s
User  : %s
Passwd: %s\n""" % (ffile, url, user, "*****" if pw != "admin" else pw)
    print info
    
    try:
        f = open(ffile, 'r')
        fstr = f.read()
        flows = json.loads(fstr)
    except Exception, e:
        print "Error: %s" % e
        
    odl = ODLInstance(url, (user, pw))
    for flow in flows:
        print "Pushing flow entry to switch %s for connection %s" % \
            (flow['sw_desc'], flow['id'])
        odl.put_flow({"flow": flow['flow']},
                     flow['switch'],
                     flow['flow']['table_id'],
                     flow['id'])
        
    f.close()
    
