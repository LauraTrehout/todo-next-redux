import { TodoContainer } from "../styles/Container.styled";
import { AllTasksTitle } from "../styles/Title.styled";
import { Input } from "../styles/Input.styled";
import TodoList from "./TodoList";
import { useState } from "react";

function Todo() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleAddClick = (e) => {
    e.preventDefault()
    setTodos([...todos, {title: input, completed: false, id: Math.floor(Math.random()*100)}])
    setInput('')
  }
  return (
    <TodoContainer>
      <AllTasksTitle>Toutes les tâches</AllTasksTitle>
      <Input type="text" placeholder=" + Ajouter une tâche" value={input} onChange={handleInputChange}/>
<button onClick={handleAddClick}>+</button>
      <TodoList todos={todos}  />
    </TodoContainer>
  );
}

export default Todo;
