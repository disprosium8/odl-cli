[
 {
     "switch": "openflow:6961614078393450496",
     "sw_desc": "dnoc839-sw1",
     "id": "359-A-UP-ARP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "id": "359-A-UP-ARP",
         "flow-name": "359-A-UP-ARP",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [
                         {"order": 0,
                          "set-field": {
                              "vlan-match": {
                                  "vlan-id": {
                                      "vlan-id": 359,
                                      "vlan-id-present": true}}}},
                         {"order": 1,
                          "output-action": {"max-length": 60,
                                            "output-node-connector": "openflow:6961614078393450496:81"}}]},
                 "order": 0}]},
         "match": {"in-port": "openflow:6961614078393450496:2",
                   "ethernet-match": {
                       "ethernet-type": {
                           "type": 2054}}},
         "priority": 2000,
         "strict": true,
         "table_id": 0
     }
 },
{
     "switch": "openflow:6961614078393450496",
     "sw_desc": "dnoc839-sw1",
     "id": "359-A-DOWN-ARP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "flow-name": "359-A-DOWN-ARP",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "id": "359-A-DOWN-ARP",
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [{"order": 1,
                                 "output-action": {"max-length": 60,
                                                   "output-node-connector": "openflow:6961614078393450496:2"}},
                                {"order": 0,
                                 "pop-vlan-action": {}}]},
                 "order": 0}]},
         "match": {"in-port": "openflow:6961614078393450496:81",
                   "vlan-match": {"vlan-id": {"vlan-id": 359,
                                              "vlan-id-present": true}},
                   "ethernet-match": {
                       "ethernet-type": {
                           "type": 2054}}},
         "priority": 2000,
         "strict": true,
         "table_id": 0
     }
 },
{
     "switch": "openflow:6961614078393450496",
     "sw_desc": "dnoc839-sw1",
     "id": "359-A-UP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "id": "359-A-UP",
         "flow-name": "359-A-UP",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [
                         {"order": 1,
                          "set-field": {
                              "vlan-match": {
                                  "vlan-id": {
                                      "vlan-id": 359,
                                      "vlan-id-present": true}}}},
                         {"order": 2,
                          "output-action": {"max-length": 60,
                                            "output-node-connector": "openflow:6961614078393450496:81"}},
                         {"order": 0,
                          "push-vlan-action": {"ethernet-type": 33024}}]},
                 "order": 0}]},
         "match": {"in-port": "openflow:6961614078393450496:2"},
         "priority": 1000,
         "strict": true,
         "table_id": 0
     }
 },
{
     "switch": "openflow:6961614078393450496",
     "sw_desc": "dnoc839-sw1",
     "id": "359-A-DOWN",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "flow-name": "359-A-DOWN",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "id": "359-A-DOWN",
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [{"order": 1,
                                 "output-action": {"max-length": 60,
                                                   "output-node-connector": "openflow:6961614078393450496:2"}},
                                {"order": 0,
                                 "pop-vlan-action": {}}]},
                 "order": 0}]},
         "match": {"in-port": "openflow:6961614078393450496:81",
                   "vlan-match": {"vlan-id": {"vlan-id": 359,
                                              "vlan-id-present": true}}},
         "priority": 1000,
         "strict": true,
         "table_id": 0
     }
 }
]
