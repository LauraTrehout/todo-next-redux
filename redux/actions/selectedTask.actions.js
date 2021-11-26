export const types = {
    ADD: "selectedTask/ADD",
  };
  
  export function newSelectedTask(payload) {
    return {
      type: types.ADD,
      payload,
    };
  }