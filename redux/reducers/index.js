import { combineReducers } from "redux";
import todosReducer from './todos.reducer'
import selectedTaskReducer from './selectedTask.reducer'


export default combineReducers({
todosReducer,
selectedTaskReducer,
});
