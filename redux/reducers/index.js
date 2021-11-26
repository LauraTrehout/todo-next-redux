import { combineReducers } from "redux";
import todosReducer from "./todos.reducer";
import selectedTaskReducer from "./selectedTask.reducer";
import doneReducer from "./done.reducer";

export default combineReducers({
  todosReducer,
  selectedTaskReducer,
  doneReducer,
});