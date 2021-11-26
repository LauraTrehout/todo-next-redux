export const types = {
  ADD: "todos/ADD",
};

export function newTodo(payload) {
  return {
    type: types.ADD,
    payload,
  };
}
