export const types = {
  ADD_TODO: "tasks/ADD_TODO",
  DELETE_TODO: "tasks/DELETE_TODO",
  ADD_DONE: "tasks/ADD_DONE",
  DELETE_DONE: "tasks/DELETE_DONE",
  SET_USER: "tasks/SET_USER"

};

export function newTodo(payload) {
  return {
    type: types.ADD_TODO,
    payload,
  };
}
export function deleteTodo(payload) {
  return {
    type: types.DELETE_TODO,
    payload,
  };
}
export function newDone(payload) {
  return {
    type: types.ADD_DONE,
    payload,
  };
}
export function deleteDone(payload) {
  return {
    type: types.DELETE_DONE,
    payload,
  };
}
export function setUser(payload) {
  return {
    type: types.SET_USER,
    payload,
  };
}
