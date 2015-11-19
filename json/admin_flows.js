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
  },
  {
     "switch": "openflow:6961614078393450496",
     "sw_desc": "dnoc839-sw1",
     "id": "DROP-LLDPOF",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "id": "DROP-LLDPOF",
         "flow-name": "DROP-LLDPOF",
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
                     "address": "01:23:00:00:00:01"}}},
         "priority": 5000,
         "table_id": 0
     }
  },
  {
     "switch": "openflow:6961614078393450496",
     "sw_desc": "dnoc839-sw1",
     "id": "DROP-LLDP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "id": "DROP-LLDP",
         "flow-name": "DROP-LLDP",
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
                     "address": "01:80:c2:00:00:0e"}}},
         "priority": 5000,
         "table_id": 0
     }
  },
  {
     "switch": "openflow:6961614077554589696",
     "sw_desc": "dnoc1625-sw1",
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
  },
  {
     "switch": "openflow:6961614077554589696",
     "sw_desc": "dnoc1625-sw1",
     "id": "DROP-LLDPOF",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "id": "DROP-LLDPOF",
         "flow-name": "DROP-LLDPOF",
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
                     "address": "01:23:00:00:00:01"}}},
         "priority": 5000,
         "table_id": 0
     }
  },
  {
     "switch": "openflow:6961614077554589696",
     "sw_desc": "dnoc1625-sw1",
     "id": "DROP-LLDP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "id": "DROP-LLDP",
         "flow-name": "DROP-LLDP",
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
                     "address": "01:80:c2:00:00:0e"}}},
         "priority": 5000,
         "table_id": 0
     }
  },
  {
     "switch": "openflow:6961614077932077056",
     "sw_desc": "dnoc849-sw1",
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
  },
  {
     "switch": "openflow:6961614077932077056",
     "sw_desc": "dnoc849-sw1",
     "id": "DROP-LLDPOF",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "id": "DROP-LLDPOF",
         "flow-name": "DROP-LLDPOF",
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
                     "address": "01:23:00:00:00:01"}}},
         "priority": 5000,
         "table_id": 0
     }
  },
  {
     "switch": "openflow:6961614077932077056",
     "sw_desc": "dnoc849-sw1",
     "id": "DROP-LLDP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "id": "DROP-LLDP",
         "flow-name": "DROP-LLDP",
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
                     "address": "01:80:c2:00:00:0e"}}},
         "priority": 5000,
         "table_id": 0
     }
  },
  {
     "switch": "openflow:6961614077940465664",
     "sw_desc": "dnoc1649-sw1",
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
  },
  {
     "switch": "openflow:6961614077940465664",
     "sw_desc": "dnoc1649-sw1",
     "id": "DROP-LLDPOF",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "id": "DROP-LLDPOF",
         "flow-name": "DROP-LLDPOF",
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
                     "address": "01:23:00:00:00:01"}}},
         "priority": 5000,
         "table_id": 0
     }
  },
  {
     "switch": "openflow:6961614077940465664",
     "sw_desc": "dnoc1649-sw1",
     "id": "DROP-LLDP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "id": "DROP-LLDP",
         "flow-name": "DROP-LLDP",
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
                     "address": "01:80:c2:00:00:0e"}}},
         "priority": 5000,
         "table_id": 0
     }
  },
 {
     "switch": "openflow:6961614078393450496",
     "sw_desc": "dnoc839-sw1",
     "id": "DROP-CTP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "flow-name": "DROP-CTP",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "id": "DROP-CTP",
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [{"order": 0,
			"drop-action": {}}]},
               	"order": 0}]},
         "match": {
                   "ethernet-match": {
                       "ethernet-type": {
                           "type": 36864}}},
         "priority": 5001,
         "strict": true,
         "table_id": 0
     }
 },
 {
     "switch": "openflow:6961614078393450496",
     "sw_desc": "dnoc839-sw1",
     "id": "DROP-POED",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "flow-name": "DROP-POED",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "id": "DROP-POED",
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [{"order": 0,
                        "drop-action": {}}]},
                "order": 0}]},
         "match": {
                   "ethernet-match": {
                       "ethernet-type": {
                           "type": 34915}}},
         "priority": 5002,
         "strict": true,
         "table_id": 0
     }
 },
 {
     "switch": "openflow:6961614077554589696",
     "sw_desc": "dnoc1625-sw1",
     "id": "DROP-POED",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "flow-name": "DROP-POED",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "id": "DROP-POED",
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [{"order": 0,
                        "drop-action": {}}]},
                "order": 0}]},
         "match": {
                   "ethernet-match": {
                       "ethernet-type": {
                           "type": 34915}}},
         "priority": 5002,
         "strict": true,
         "table_id": 0
     }
 },
 {
     "switch": "openflow:6961614077932077056",
     "sw_desc": "dnoc849-sw1",
     "id": "DROP-POED",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "flow-name": "DROP-POED",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "id": "DROP-POED",
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [{"order": 0,
                        "drop-action": {}}]},
                "order": 0}]},
         "match": {
                   "ethernet-match": {
                       "ethernet-type": {
                           "type": 34915}}},
         "priority": 5002,
         "strict": true,
         "table_id": 0
     }
 },
 {
     "switch": "openflow:6961614077940465664",
     "sw_desc": "dnoc1649-sw1",
     "id": "DROP-POED",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "flow-name": "DROP-POED",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "id": "DROP-POED",
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [{"order": 0,
                        "drop-action": {}}]},
                "order": 0}]},
         "match": {
                   "ethernet-match": {
                       "ethernet-type": {
                           "type": 34915}}},
         "priority": 5002,
         "strict": true,
         "table_id": 0
     }
 },
 {
     "switch": "openflow:6961614078393450496",
     "sw_desc": "dnoc839-sw1",
     "id": "DROP-RRCP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "flow-name": "DROP-RRCP",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "id": "DROP-RRCP",
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [{"order": 0,
                        "drop-action": {}}]},
                "order": 0}]},
         "match": {
                   "ethernet-match": {
                       "ethernet-type": {
                           "type": 34969}}},
         "priority": 5002,
         "strict": true,
         "table_id": 0
     }
 },
 {
     "switch": "openflow:6961614077554589696",
     "sw_desc": "dnoc1625-sw1",
     "id": "DROP-RRCP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "flow-name": "DROP-RRCP",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "id": "DROP-RRCP",
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [{"order": 0,
                        "drop-action": {}}]},
                "order": 0}]},
         "match": {
                   "ethernet-match": {
                       "ethernet-type": {
                           "type": 34969}}},
         "priority": 5002,
         "strict": true,
         "table_id": 0
     }
 },
 {
     "switch": "openflow:6961614077932077056",
     "sw_desc": "dnoc849-sw1",
     "id": "DROP-RRCP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "flow-name": "DROP-RRCP",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "id": "DROP-RRCP",
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [{"order": 0,
                        "drop-action": {}}]},
                "order": 0}]},
         "match": {
                   "ethernet-match": {
                       "ethernet-type": {
                           "type": 34969}}},
         "priority": 5002,
         "strict": true,
         "table_id": 0
     }
 },
 {
     "switch": "openflow:6961614077940465664",
     "sw_desc": "dnoc1649-sw1",
     "id": "DROP-RRCP",
     "flow": {
         "barrier": false,
         "cookie": 0,
         "flow-name": "DROP-RRCP",
         "hard-timeout": 0,
         "idle-timeout": 0,
         "id": "DROP-RRCP",
         "instructions": {
             "instruction": [{
                 "apply-actions": {
                     "action": [{"order": 0,
                        "drop-action": {}}]},
                "order": 0}]},
         "match": {
                   "ethernet-match": {
                       "ethernet-type": {
                           "type": 34969}}},
         "priority": 5002,
         "strict": true,
         "table_id": 0
     }
 }
]
