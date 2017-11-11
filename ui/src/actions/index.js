export const [ 
	STARTUP,

	// masternode recv
	MASTER_CONNECTED,
	MASTER_DISCONNECTED,
	MASTER_STATE,
	NODES_LIST,
	NODE_ADDED,
	NODE_REMOVED,
	NODE_OP_DONE,
	EVENTS,

	// masternode send
	ADD_NODE,
	REMOVE_NODE,
	NODE_OP,

] = [
	'STARTUP',
	'MASTER_CONNECTED',
	'MASTER_DISCONNECTED',
	'MASTER_STATE',
	'NODES_LIST',
	'NODE_ADDED',
	'NODE_REMOVED',
	'NODE_OP_DONE',
	'EVENTS',
	'ADD_NODE',
	'REMOVE_NODE',
	'NODE_OP',
]

export const startup = payload => ({
	type: STARTUP,
	payload
})

export const addNode = payload => ({
	type: ADD_NODE,
	payload
})

export const removeNode = payload => ({
	type: REMOVE_NODE,
	payload
})

/*export const pong = payload => ({
	type: 'SEND_MESSAGE',
	event: 'pong',
	payload
})*/

export const initConnection = payload => ({
	type: 'SEND_MESSAGE',
	event: 'initConnection',
	payload
})

export const nodeOp = payload => ({
	type: 'SEND_MESSAGE',
	event: 'nodeOp',
	payload
})

export const masterOn = payload => ({
	type: 'SEND_MESSAGE',
	event: 'masterOn',
	payload
})

