import { TodoListContainer } from "../../styles/Container.styled";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, finished, setFinished, taskDate, setTaskDate }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          finished={finished}
          setFinished={setFinished}
          taskDate={taskDate}
          setTaskDate={setTaskDate}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
