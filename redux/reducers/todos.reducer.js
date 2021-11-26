import {types as typesTodos } from '../actions/todos.actions'

const initialState = {
    todos: [],
  };

  function todosReducer(state = initialState, action) {
    switch (action.type) {
      case typesTodos.ADD:
        let newTodos = [...state.todos, action.payload];
        return {
          ...state,
          todos: newTodos,
        };
      default:
        return state;
    }
  }
  
  export default todosReducer;
  
  