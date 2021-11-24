import React from "react";
import { TasksContainer } from "../styles/Container.styled";

import Done from "./Done";
import Todo from "./Todo";

function Tasks({
  todos,
  input,
  setInput,
  setTodos,
  done,
  setDone,
  selected,
  setSelected,
}) {
  return (
    <TasksContainer>
      <Todo
        todos={todos}
        input={input}
        setInput={setInput}
        setTodos={setTodos}
        done={done}
        setDone={setDone}
        selected={selected}
        setSelected={setSelected}
      />
      <Done done={done} setDone={setDone} />
    </TasksContainer>
  );
}

export default Tasks;
