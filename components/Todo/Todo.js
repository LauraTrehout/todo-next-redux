import { TodoContainer } from "../../styles/Container.styled";
import { AllTasksTitle } from "../../styles/Title.styled";
import { Input } from "../../styles/Input.styled";
import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";
import { newTodo } from "../../redux/actions/tasks.actions";

function Todo({ input, setInput, finished, setFinished , taskDate, setTaskDate}) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.tasks.todos);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (input !== "") {
      dispatch(
        newTodo({
          title: input,
          id: Math.floor(Math.random() * 100),
          taskUser: "",
          date: "",
        })
      );
      setInput("");
    }
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
        finished={finished}
        setFinished={setFinished}
        taskDate={taskDate}
        setTaskDate={setTaskDate}
      />
    </TodoContainer>
  );
}

export default Todo;
