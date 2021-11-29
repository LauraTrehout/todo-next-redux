import { combineReducers } from "redux";
import tasks from "./tasks.reducer";
import selectedTask from "./selectedTask.reducer";

export default combineReducers({
  tasks,
  selectedTask
});