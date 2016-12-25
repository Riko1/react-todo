let actions = require('../constants/task');
let initState = {
	tasks: []
}

let taskReducer = function(state = initState, action) {
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
		default: {
			return state;
		}
	}
}

module.exports = taskReducer;