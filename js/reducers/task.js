let actions = require('../constants/task');
let initState = {
	tasks: []
}

let Service = function() {
	if (Service.single) {
		return Service.single;
	}

	Service.single = this;
	var self = this;

	this.get = function(data, id) {
		var tasks = Array.isArray(data) ? data : data.tasks;
		for (var i = 0; i < tasks.length; i++) {
			var currentTask = tasks[i];
			if (currentTask.id == id) {
				return i;
			}
		}
		return null;
	}
}

let taskReducer = function(state = initState, action) {
	var helper = new Service();
	switch(action.type) {
		case actions.TASK_GET: {
			return { ...state }
		} break;
		case actions.TASK_GET_ALL: {
			return { ...state }
		} break;
		case actions.TASK_ADD: {
			let tasks = state.tasks.slice();
			tasks.push(action.payload);
			return { ...state, tasks: tasks };
		} break;
		case actions.TASK_EDIT: {
			return { ...state }
		} break;
		case actions.TASK_REMOVE: {
			return { ...state }
		} break;
		case actions.TASK_CHANGE_STATUS: {
			let tasks = state.tasks.slice();
			let index = helper.get(tasks, action.payload);
			let status = tasks[index].status == '' ? 'complete' : '';
			tasks[index] = { ...tasks[index], status };
			return { ...state, tasks }
		} break;
		default: {
			return state;
		}
	}
}

module.exports = taskReducer;