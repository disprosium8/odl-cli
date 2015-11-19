[
 {
     "switch": "openflow:264003821260288",
     "sw_desc": "dnoc849-sw3",
     "id": "181-A-UP",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
         "id": "181-A-UP",
	 "flow-name": "181-A-UP",
	 "hard-timeout": 0,
         "idle-timeout": 0,
	 "match": {"in-port": "openflow:264003821260288:38570"},
             "priority": 500,
             "table_id": 0
         "instructions": {
	     "instruction": [{
		 "apply-actions": {
		     "action": [
			 {"order": 1,
                          "set-field": {
			      "vlan-match": {
				  "vlan-id": {
				      "vlan-id": 243,
                                      "vlan-id-present": true}}}},
			 {"order": 2,
                          "output-action": {"max-length": 60,
                                            "output-node-connector": "openflow:264003821260288:41907"}},
			 {"order": 0,
			  "push-vlan-action": {"ethernet-type": 33024}}]},
                 "order": 0}]},
     }
 },
 {
     "switch": "openflow:264003821260288",
     "sw_desc": "dnoc849-sw3",
     "id": "181-A-DOWN",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
	 "flow-name": "181-A-DOWN",
	 "hard-timeout": 0,
	 "idle-timeout": 0,
	 "id": "181-A-DOWN",
         "match": {"in-port": "openflow:264003821260288:41907",
                   "vlan-match": {"vlan-id": {"vlan-id": 243,
                                              "vlan-id-present": true}}},
	 "instructions": {
	     "instruction": [{
		 "apply-actions": {
		     "action": [
                         {"order": 1,
			 "output-action": {"max-length": 60,
                                           "output-node-connector": "openflow:264003821260288:38570"}},
		 	 {"order": 0,
			 "pop-vlan-action": {}}]},
		 "order": 0}]},
	 "priority": 500,
	 "strict": true,
	 "table_id": 0
     }
 }
]
