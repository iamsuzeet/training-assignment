import * as actionTypes from './todos-actionType';

export const addTodo = (todo) => {
  return {
    type: actionTypes.addTodo,
    payload: todo,
  };
};

export const markCompleteTodo = (id) => {
  return {
    type: actionTypes.markCompleteTodo,
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: actionTypes.deleteTodo,
    payload: id,
  };
};
