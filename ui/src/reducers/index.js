import { combineReducers } from 'redux'

import { 
  STARTUP,
  MASTER_CONNECTED,
  MASTER_DISCONNECTED,
  MASTER_STATE,
  NODES_LIST,
  NODE_ADDED,
  NODE_REMOVED,
  NODE_OP_DONE,
  EVENTS
} from '../actions'

const INITIAL_STATE = {
	ctx: { 
		connected: false,

		master: {
			id: -1,
			lastUpdate: null,
			lightNodesAlive: -1,
			startTime: null,
			uptime: -1
		},

		lightNodes: []
	}
}

const startupReducer = (state = INITIAL_STATE, action) => {
	console.log('REDUCER0', action, state)
	switch (action.type) {
		case STARTUP:
			return {
				...state,
				ctx: {
					...state.ctx
				}
			}
		case MASTER_CONNECTED:
			return {
				...state,
				ctx: {
					...state.ctx,
					connected: true
				}
			}
		case MASTER_DISCONNECTED:
			return {
				...state,
				ctx: {
					...state.ctx,
					connected: false
				}
			}
		case MASTER_STATE:
			return {
				...state,
				ctx: {
					...state.ctx,
					master: action.payload
				}
			}
		case NODES_LIST:
			return {
				...state,
				ctx: {
					...state.ctx,
					lightNodes: action.payload
				}
			}
		default:
			return state
	}
}

const reducer = combineReducers({
  startupReducer
})

export default reducer
