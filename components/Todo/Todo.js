import { TodoContainer } from "../../styles/Container.styled";
import { AllTasksTitle } from "../../styles/Title.styled";
import { Input } from "../../styles/Input.styled";
import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";
import { newTodo } from "../../redux/actions/todos.actions";

function Todo({
  input,
  setInput,
  done,
  setDone,
  selected,
  setSelected,
  selectedUser,
  setSelectedUser,
  selectedDate,
  setSelectedDate,
  finished,
  setFinished,
}) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (input !== "") {
      dispatch(
        newTodo({
          title: input,
          completed: false,
          id: Math.floor(Math.random() * 100),
          taskUser: "",
          date:''
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
