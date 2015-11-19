[
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
                           "type": 34915}}},
         "priority": 5001,
         "strict": true,
         "table_id": 0
     }
 }
]
