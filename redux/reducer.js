function(state) {

}


let reducer = function(state, action) {
	switch (action.type) {
		case 'ACTION_NAME':
			return Object.assign({}, state, {



			})
		
		default:
			return state; // if no matching actions, return original state - required
	}
}

export default reducer