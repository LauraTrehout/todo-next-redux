import { types as typesDone } from "../actions/done.actions";

const initialState = {
  done: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case typesDone.ADD:
      let newDone = [...state.done, action.payload];
      return {
        ...state,
        done: newDone,
      };
    case typesDone.DELETE:
      let deleteDone = [...state.done, action.payload];
      return {
        ...state,
        done: deleteDone,
      };
    default:
      return state;
  }
}

export default reducer;
