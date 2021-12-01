import { Check } from "@styled-icons/bootstrap/Check";
import { TodoCheckbox } from "../../styles/Checkbox.styled";
import {
  TodoItemContainer, TaskDetails, FlexContainer
} from "../../styles/Container.styled";
import { TaskDate, TaskTitle, TaskUser } from "../../styles/Title.styled";
import { useDispatch } from "react-redux";
import { newSelectedTask } from "../../redux/actions/selectedTask.actions";
import fr from "date-fns/locale/fr";
import { parseISO } from "date-fns";
import format from "date-fns/format";

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
    } else if (todo.date === '') {
      return ''
    } else {
      return format(todo.date, "dd MMMM yyyy", { locale: fr });
    }
  };

  console.log(taskDate);
  return (
    <TodoItemContainer>
      <FlexContainer>
      <TodoCheckbox onClick={handleBoxClick}>
        <Check color="white" />
      </TodoCheckbox>
      <TaskDetails>
        <TaskTitle>{todo.title}</TaskTitle>
        <TaskUser>{todo.taskUser}</TaskUser>
      </TaskDetails>
      </FlexContainer>
        <TaskDate>{getDate()}</TaskDate>
    </TodoItemContainer>
  );
};

export default TodoItem;
