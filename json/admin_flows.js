[
  {
     "switch": "openflow:6961614078393450496",
     "sw_desc": "dnoc839-sw1",
     "id": "DROP-CDP",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
         "id": "DROP-CDP",
	 "flow-name": "DROP-CDP",
	 "hard-timeout": 0,
         "idle-timeout": 0,
         "instructions": {
	     "instruction": [{
		 "apply-actions": {
		     "action": [
			 {"order": 0,
                          "drop-action": {}}]},
		 "order": 0}]},
	 "match": {
	     "ethernet-match": {
		 "ethernet-destination": {
		     "address": "01:00:0c:cc:cc:cc"}}},
	 "priority": 5000,
	 "table_id": 0
     }
  }
]
