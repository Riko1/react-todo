var actions = require('../constants/task');

let TaskActions = {
	get: function(id) {
		return {
			type: actions.TASK_GET,
			payload: id
		}
	},
	getAll: function() {
		return {
			type: actions.TASK_GET_ALL,
			payload: null
		}
	},
	add: function(task) {
		return {
			type: actions.TASK_ADD,
			payload: task
		}
	},
	edit: function(task) {
		return {
			type: actions.TASK_EDIT,
			payload: task
		}
	},
	remove: function(id) {
		return {
			type: actions.TASK_REMOVE,
			payload: id
		}
	}
}

module.exports = TaskActions;