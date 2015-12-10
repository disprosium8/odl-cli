[
  {
     "switch": "openflow:14721744459490394112",
     "sw_desc": "agg-rtr2",
     "id": "181-A-UP-NORMAL",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
         "id": "181-A-UP-NORMAL",
	 "flow-name": "181-A-UP-NORMAL",
	 "hard-timeout": 0,
         "idle-timeout": 0,
         "instructions": {
	     "instruction": [{
		 "apply-actions": {
		     "action": [
			 {"order": 0,
                          "output-action": {"max-length": 60,
                                            "output-node-connector": "NORMAL"}}]},
		 "order": 0}]},
	 "match": {"in-port": "openflow:14721744459490394112:337"},
         "priority": 500,
         "table_id": 0
     }
  },
  {
     "switch": "openflow:14721744459490394112",
     "sw_desc": "agg-rt2",
     "id": "181-A-DOWN-TAG",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
         "id": "181-A-DOWN-TAG",
	 "flow-name": "181-A-DOWN-TAG",
	 "hard-timeout": 0,
         "idle-timeout": 0,
         "instructions": {
	     "instruction": [{
		 "apply-actions": {
		     "action": [
			 {"order": 0,
                          "output-action": {"max-length": 60,
                                            "output-node-connector": "openflow:14721744459490394112:337"}}]},
		 "order": 0}]},
	 "match": {"in-port": "openflow:6961614077932077056:81"},
         "priority": 500,
         "table_id": 0
     }
  }
]
