import { ADD_TASK, GET_TASKS_TODO } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case ADD_TASK:
		return [{title:action.title,hours:action.hours,state:'TODO'}, ...state];
		case GET_TASKS_TODO:
			return state.filter(task => task.state === 'TODO');
		default:
			return state;
	}

	
}