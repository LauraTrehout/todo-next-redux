export const types = {
    ADD: "selectedTask/ADD",
    RESET: "selectedTask/RESET"
  };
  
  export function newSelectedTask(payload) {
    return {
      type: types.ADD,
      payload,
    };
  }
  export function resetSelectedTask(payload) {
    return {
      type: types.RESET,
      payload,
    };
  }
  