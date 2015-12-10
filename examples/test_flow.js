[
 {
     "switch": "openflow:223189291260227",
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
                          "set-field": {
			      "vlan-match": {
				  "vlan-id": {
				      "vlan-id": 243,
                                      "vlan-id-present": true}}}},
			 {"order": 1,
                          "output-action": {"max-length": 60,
                                            "output-node-connector": "openflow:223189291260227:LOCAL"}}]},
		 "order": 0}]},
	 "match": {"in-port": "openflow:223189291260227:LOCAL",
		   "ethernet-match": {
		       "ethernet-type": {
			   "type": 2054}}},
         "priority": 2000,
	 "strict": true,
         "table_id": 0
     }
 },
 {
     "switch": "openflow:223189291260227",
     "sw_desc": "dnoc839-sw1",
     "id": "181-A-DOWN-ARP",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
	 "flow-name": "181-A-DOWN-ARP",
	 "hard-timeout": 0,
	 "idle-timeout": 0,
	 "id": "181-A-DOWN-ARP",
	 "instructions": {
	     "instruction": [{
		 "apply-actions": {
		     "action": [{"order": 1,
				 "output-action": {"max-length": 60,
                                                   "output-node-connector": "openflow:223189291260227:LOCAL"}},
				{"order": 0,
				 "pop-vlan-action": {}}]},
		 "order": 0}]},
	 "match": {"in-port": "openflow:223189291260227:81",
		   "vlan-match": {"vlan-id": {"vlan-id": 243,
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
     "switch": "openflow:223189291260227",
     "sw_desc": "dnoc839-sw1",
     "id": "181-A-UP",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
         "id": "181-A-UP",
	 "flow-name": "181-A-UP",
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
				      "vlan-id": 243,
                                      "vlan-id-present": true}}}},
			 {"order": 2,
                          "output-action": {"max-length": 60,
                                            "output-node-connector": "openflow:223189291260227:LOCAL"}},
			 {"order": 0,
			  "push-vlan-action": {"ethernet-type": 33024}}]},
                 "order": 0}]},
	 "match": {"in-port": "openflow:223189291260227:LOCAL"},
         "priority": 1000,
	 "strict": true,
         "table_id": 0
     }
 },
 {
     "switch": "openflow:223189291260227",
     "sw_desc": "dnoc839-sw1",
     "id": "181-A-DOWN",
     "flow": {
	 "barrier": false,
	 "cookie": 0,
	 "flow-name": "181-A-DOWN",
	 "hard-timeout": 0,
	 "idle-timeout": 0,
	 "id": "181-A-DOWN",
	 "instructions": {
	     "instruction": [{
		 "apply-actions": {
		     "action": [{"order": 1,
				 "output-action": {"max-length": 60,
                                                   "output-node-connector": "openflow:223189291260227:LOCAL"}},
				{"order": 0,
				 "pop-vlan-action": {}}]},
		 "order": 0}]},
	 "match": {"in-port": "openflow:223189291260227:LOCAL",
		   "vlan-match": {"vlan-id": {"vlan-id": 243,
                                              "vlan-id-present": true}}},
	 "priority": 1000,
	 "strict": true,
	 "table_id": 0
     }
 }
]
