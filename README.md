# README

This is a CLI utility that allows one to navigate the ODL RESTCONF
JSON dictionaries in a manner similar to a *NIX filesystem.

The CLI makes use of the python-odl module available at
https://github.com/SPRACE/python-odl


## Example Usage

```
$ ./odl-cli.py http://home:8181
Server: http://home:8181
User  : admin
Passwd: admin

http://home:8181/restconf/operational/opendaylight-inventory:nodes/
http://home:8181/restconf/config/opendaylight-inventory:nodes/
odl-cli> get_nodes
OK
odl-cli> ls
openflow:223189291260227: ("ezra-dev", "None", "Nicira, Inc.")
controller-config: ("None", "None", "None")
odl-cli> cd openflow:223189291260227
odl-cli> ls
tables
description: None
hardware: Open vSwitch
connectors
manufacturer: Nicira, Inc.
ip_address: 192.168.1.30
software: 2.1.0
odl-cli> 
EOF        add_flow   cd         del_flow   get_nodes  get_topo   help       ls         lsd        pwd        update     
odl-cli> 
```
