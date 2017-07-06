import { combineReducers } from 'redux';
import TaskReducer from './reducer_task';

const rootReducer = combineReducers({
  list: TaskReducer,
});

export default rootReducer;
