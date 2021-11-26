export const types = {
  ADD: "todos/ADD",
  DELETE: "todos/DELETE"
};

export function newTodo(payload) {
  return {
    type: types.ADD,
    payload,
  };
}
export function deleteTodo(payload) {
  return {
    type: types.DELETE,
    payload,
  };
}
