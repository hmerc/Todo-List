import { ADD_TASK, GET_TASKS_TODO, MOVE_PROGRESS, MOVE_DONE, DELETE_TASK, MOVE_TODO, MESSAGE, EDIT_SAVE_TASK, EDIT_TASK } from '../actions/index';

const initialState = {
  hoursTODO: 0,
  hoursPROGRESS:0,
  message:'',
  tasks: [],
  editTask:false
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
                    description:action.props.description,
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
   				 }),
            hoursPROGRESS: parseInt(state.hoursPROGRESS, 10) - parseInt(action.task.hours, 10)
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
    case MESSAGE:
      return Object.assign({}, state, { message: action.message});

    case EDIT_SAVE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.map((task) => {
              if (task.id === action.props.id) {
                return Object.assign({}, task, {
                    title: action.props.title,
                    hours: action.props.hours,
                    description: action.props.description
                });
              }
              
              return task;
           })
        });

    case EDIT_TASK: 
      return Object.assign({}, state, { editTask :action.edit });

		default:
			return state;
	}

	
}