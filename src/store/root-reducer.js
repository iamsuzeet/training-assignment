import { combineReducers } from 'redux';
import todosReducer from './todos/todos-reducers';

const appReducer = combineReducers({
  todos: todosReducer,
});

export default appReducer;
