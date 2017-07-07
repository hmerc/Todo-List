import { combineReducers } from 'redux';
import TaskReducer from './reducer_task';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  list: TaskReducer,
  form: formReducer
});

export default rootReducer;
