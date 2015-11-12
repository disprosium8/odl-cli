{
    'flow': {
	'cookie': 0,
	'flags': '',
	'id': '298a',
	'instructions': {
	    'instruction': [{
		'apply-actions': {
		    'action': [{
			'order': 1,
			'push-vlan-action': {'ethernet-type': 33024}},
			       {'order': 2,
				'set-field': {'vlan-match': {'vlan-id': {'vlan-id': 298,
									 'vlan-id-present': True}}}},
			       {'order': 0,
				'output-action': {'max-length': 0,
						  'output-node-connector': '37'}}]},
		'order': 0}]},
	'match': {'ethernet-match': {'ethernet-type': {'type': 33024}},
		  'vlan-match': {'vlan-id': {'vlan-id': 298,
					     'vlan-id-present': True}}},
	'priority': 500,
	'table_id': 0}
}
