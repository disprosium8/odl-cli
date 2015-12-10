[
  {
     "switch": "openflow:6961614077932077056",
     "sw_desc": "dnoc839-sw1",
     "id": "181-A-UP-ARP",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
         "id": "181-A-UP-ARP",
	 "flow-name": "181-A-UP-ARP",
	 "hard-timeout": 0,
         "idle-timeout": 0,
         "instructions": {
	     "instruction": [{
		 "apply-actions": {
		     "action": [
			 {"order": 0,
                          "output-action": {"max-length": 60,
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
     "id": "181-A-DOWN-ARP",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
         "id": "181-A-DOWN-ARP",
	 "flow-name": "181-A-DOWN-ARP",
	 "hard-timeout": 0,
         "idle-timeout": 0,
         "instructions": {
	     "instruction": [{
		 "apply-actions": {
		     "action": [
			 {"order": 0,
                          "output-action": {"max-length": 60,
                                            "output-node-connector": "openflow:6961614077932077056:1"}}]},
		 "order": 0}]},
	 "match": {"in-port": "openflow:6961614077932077056:81"},
         "priority": 500,
         "table_id": 0
     }
  }
]
