
let reducer = function(state, action) {
	switch (action.type) {
		case 'ACTION_NAME':
			return Object.assign({}, state, { }) // return empty array which is filled with previous array state + an action
		
		default:
			return state; // if no matching actions, return original state - required
	}
}

export default reducer