import { TodoContainer } from "../../styles/Container.styled";
import { AllTasksTitle } from "../../styles/Title.styled";
import { Input } from "../../styles/Input.styled";
import TodoList from "./TodoList";
import { useState } from "react";

function Todo({
  todos,
  input,
  setInput,
  setTodos,
  done,
  setDone,
  selected,
  setSelected,
  selectedUser,
  setSelectedUser,
  selectedDate,
  setSelectedDate,
  finished,
  setFinished
}) {
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    setTodos([
      ...todos,
      { title: input, completed: false, id: Math.floor(Math.random() * 100), user:''},
    ]);
    setInput("");
  };
  return (
    <TodoContainer>
      <AllTasksTitle>Toutes les tâches</AllTasksTitle>
      <Input
        type="text"
        placeholder=" + Ajouter une tâche"
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
      />
      <TodoList
        todos={todos}
        done={done}
        setDone={setDone}
        selected={selected}
        setSelected={setSelected}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        finished={finished}
        setFinished={setFinished}
      />
    </TodoContainer>
  );
}

export default Todo;
