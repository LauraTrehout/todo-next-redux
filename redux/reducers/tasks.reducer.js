import { types as typesTasks } from "../actions/tasks.actions";

const initialState = {
  todos: [],
  done: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case typesTasks.ADD_TODO:
      let newTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: newTodos,
      };
    case typesTasks.DELETE_TODO:
      let deleteTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
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
      let deleteDone = state.done.filter((elem) => elem.id !== action.payload);
      return {
        ...state,
        done: deleteDone,
      };
    case typesTasks.SET_USER:
      const { id_user, id_task } = action.payload;
      let _todos = [];
      state.todos.map((task) => {
        if (task.id === id_task) {
          task.taskUser = id_user;
          _todos.push(task);
        } else {
          _todos.push(task);
        }
      });
      return {
        ...state,
        todos: _todos,
      };
    case typesTasks.SET_DATE:
      const { task_date, task_id } = action.payload;
      let _todosDate = [];
      state.todos.map((task) => {
        if (task.id === task_id) {
          (task.date = task_date), _todosDate.push(task);
        } else {
          _todosDate.push(task);
        }
      });
      return {
        ...state,
        todos: _todosDate,
      };
    default:
      return state;
  }
}

export default reducer;
