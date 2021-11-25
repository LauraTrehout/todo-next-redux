import styled from "styled-components";
import { TodoListContainer } from "../../styles/Container.styled";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
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
}) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
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
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
