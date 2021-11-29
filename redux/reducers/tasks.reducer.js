import { types as typesTasks } from "../actions/tasks.actions";

const initialState = {
  todos: [],
  done: [],
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case typesTasks.ADD_TODO:
      let newTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: newTodos,
      };
    case typesTasks.DELETE_TODO:
      let deleteTodos = state.todos.filter(todo => todo.id !== action.payload);
      return {
        ...state,
        todos: deleteTodos,
      };
    case typesTasks.ADD_DONE:
      let newDone = [...state.done, action.payload];
      return {
        ...state,
        done: newDone,
      };
    case typesTasks.DELETE_DONE:
      let deleteDone = state.done.filter(elem => elem.id !== action.payload);
      return {
        ...state,
        done: deleteDone,
      };
    default:
      return state;
  }
}

export default reducer;
