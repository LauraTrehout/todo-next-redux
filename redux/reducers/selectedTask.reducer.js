import { types as typesSelectedTask } from "../actions/selectedTask.actions";


const initialState = {
  selectedTask: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case typesSelectedTask.ADD:
      let newSelectedTask = action.payload;
      return {
        selectedTask: newSelectedTask,
      };
    default:
      return state;
  }
}

export default reducer;
