import { TodoListContainer } from "../../styles/Container.styled";
import TodoItem from "./TodoItem";


const TodoList = ({
  todos,
  finished,
  setFinished,
}) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          finished={finished}
          setFinished={setFinished}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
