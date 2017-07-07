import { ADD_TASK, GET_TASKS_TODO, MOVE_PROGRESS, MOVE_DONE, DELETE_TASK, MOVE_TODO } from '../actions/index';

const initialState = {
  hoursTODO: 0,
  hoursPROGRESS:0,
  message:'',
  tasks: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case ADD_TASK:

				return Object.assign({}, state, {
        			tasks: [
          				...state.tasks,
         				{
            				title:action.props.title,
            				hours:action.props.hours,
            				state:'TODO'
          				}
        			],
        			hoursTODO: parseInt(state.hoursTODO, 10) + parseInt(action.props.hours, 10)
      			});
			
		
		case GET_TASKS_TODO:
			return state

		case MOVE_DONE:
			return Object.assign({}, state, {
    			tasks: state.tasks.map((task) => {
      				if (task === action.task) {
        				return Object.assign({}, task, {
          					state: 'DONE'
        				});
      				}
      				
      				return task;
   				 })
   			});

		case MOVE_PROGRESS:
			return Object.assign({}, state, {
    			tasks: state.tasks.map((task) => {
      				if (task === action.task) {
        				return Object.assign({}, task, {
          					state: 'PROGRESS'
        				});
      				}
      				
      				return task;
   				 }),
    			hoursPROGRESS: parseInt(state.hoursPROGRESS, 10) + parseInt(action.task.hours, 10)
  			
  			});

		case MOVE_TODO:
			return Object.assign({}, state, {
    			tasks: state.tasks.map((task) => {
      				if (task === action.task) {
        				return Object.assign({}, task, {
          					state: 'TODO'
        				});
      				}
      				
      				return task;
   				 })
  			});
		
		case DELETE_TASK:
			return Object.assign({}, state, {
    			tasks: state.tasks.filter((task) => {
      				if (task === action.task) {
        				return task !== action.task;
      				}
      				return task;
   				 })
  			});
		default:
			return state;
	}

	
}