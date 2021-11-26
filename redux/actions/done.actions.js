export const types = {
    ADD: "done/ADD",
    DELETE: "done/DELETE"
  };
  
  export function newDone(payload) {
    return {
      type: types.ADD,
      payload,
    };
  }
  export function deleteDone(payload) {
    return {
      type: types.DELETE,
      payload,
    };
  }