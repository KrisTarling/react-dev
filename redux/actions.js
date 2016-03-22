let actions = {
	actionName: function(val) {
		return {
			type: 'ACTION_NAME',
			val: val
		}
	},

	actionName2: function(val) {
		return {
			type: 'ACTION_NAME2',
			val: val
		}
	}
}

export default actions