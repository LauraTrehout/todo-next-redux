import { Check } from "@styled-icons/bootstrap/Check";
import { TodoCheckbox } from "../../styles/Checkbox.styled";
import { TodoItemContainer } from "../../styles/Container.styled";
import { TaskTitle } from "../../styles/Title.styled";
import { useDispatch } from "react-redux";
import { newSelectedTask } from "../../redux/actions/selectedTask.actions";
import fr from "date-fns/locale/fr";
import { parseISO } from "date-fns";
import format from "date-fns/format";
import { SadTear } from "@styled-icons/fa-regular";

const TodoItem = ({ todo, setFinished, taskDate }) => {
  const dispatch = useDispatch();
  const handleBoxClick = () => {
    dispatch(newSelectedTask(todo));
    setFinished(false);
  };
  const getDate = () => {
    if (
      todo.date.toString().slice(0, 10) === new Date().toString().slice(0, 10)
    ) {
      return "Aujourd'hui";
    } else {
      return format(todo.date, "dd MMMM yyyy", { locale: fr });
    }
  };
  console.log(taskDate);
  console.log(todo.date);
  return (
    <TodoItemContainer>
      <TodoCheckbox onClick={handleBoxClick}>
        <Check color="white" />
      </TodoCheckbox>
      <TaskTitle>{todo.title}</TaskTitle>
      <TaskTitle>{todo.taskUser}</TaskTitle>
      <TaskTitle>{getDate()}</TaskTitle>
    </TodoItemContainer>
  );
};

export default TodoItem;
