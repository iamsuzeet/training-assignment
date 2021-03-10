import * as actionTypes from './todos-actionType';

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case actionTypes.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case actionTypes.markCompleteTodo:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return initialState;
  }
};

export default todosReducer;
