import { ADD_TASK, GET_TASKS_TODO, MOVE_PROGRESS, MOVE_DONE } from '../actions/index';

const initialState = {
  tasks: []
}

export default function(state = [], action) {
	switch(action.type) {
		case ADD_TASK:
			return [{title:action.title,hours:action.hours,state:'TODO'}, ...state];
		
		case GET_TASKS_TODO:
			return state

		case MOVE_DONE:
			return state.map(task => {
				if(task === action.task) {
					return Object.assign({}, task, {
          				state: 'DONE'
        			});
				}
				return task;
			});

		case MOVE_PROGRESS:
			return state.map(task => {
				if(task === action.task) {
					return Object.assign({}, task, {
          				state: 'PROGRESS'
        			});
				}
				return task;
			});
		default:
			return state;
	}

	
}