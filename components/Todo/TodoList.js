import { TodoListContainer } from "../../styles/Container.styled";
import TodoItem from "./TodoItem";


const TodoList = ({
  todos,
  done,
  setDone,
  finished,
  setFinished,
}) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          done={done}
          setDone={setDone}
          finished={finished}
          setFinished={setFinished}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
