[
 {
     "switch": "openflow:6961614077932077056",
     "sw_desc": "dnoc839-sw1",
     "id": "181-A-DOWN",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
         "id": "181-A-DOWN",
	 "flow-name": "181-A-DOWN",
	 "hard-timeout": 0,
         "idle-timeout": 0,
         "instructions": {
	     "instruction": [{
		 "apply-actions": {
		     "action": [
			 {"order": 0,
                          "output-action": {"max-length": 0,
                                            "output-node-connector": "openflow:6961614077932077056:81"}}]},
                 "order": 0}]},
	 "match": {"in-port": "openflow:6961614077932077056:1"},
         "priority": 500,
         "table_id": 0
     }
 },
 {
     "switch": "openflow:6961614077932077056",
     "sw_desc": "dnoc839-sw1",
     "id": "181-A-UP",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
	 "flow-name": "181-A-UP",
	 "hard-timeout": 0,
	 "idle-timeout": 0,
	 "id": "181-A-UP",
	 "instructions": {
	     "instruction": [{
		 "apply-actions": {
		     "action": [{"order": 1,
				 "output-action": {"max-length": 0,
                                                   "output-node-connector": "openflow:6961614077932077056:1"}}]},
		 "order": 0}]},
	 "match": {"in-port": "openflow:6961614077932077056:81"},
	 "priority": 500,
	 "strict": true,
	 "table_id": 0
     }
 }
]
