export const types = {
    ADD: "selectedTask/ADD",
    ADD_USER: "selectedTask/ADD_USER"
  };
  
  export function newSelectedTask(payload) {
    return {
      type: types.ADD,
      payload,
    };
  }
  