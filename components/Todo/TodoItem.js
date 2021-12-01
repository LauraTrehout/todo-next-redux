import fr from "date-fns/locale/fr";
import format from "date-fns/format";

import { useSelector, useDispatch } from "react-redux";
import { newDone, deleteTodo } from "../../redux/actions/tasks.actions";

import { Check } from "@styled-icons/bootstrap/Check";
import { TodoCheckbox } from "../../styles/Checkbox.styled";
import {
  TodoItemContainer,
  TaskDetails,
  FlexContainer,
} from "../../styles/Container.styled";
import { TaskDate, TaskTitle, TaskUser } from "../../styles/Title.styled";
import {
  newSelectedTask,
  resetSelectedTask,
} from "../../redux/actions/selectedTask.actions";

const TodoItem = ({ todo, setFinished }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.selectedTask.selectedTask);
  const handleTaskClick = () => {
    dispatch(newSelectedTask(todo));
  };

  const toggleTask = () => {
    if (selectedTask !== "") {
      dispatch(newDone(selectedTask));
      dispatch(deleteTodo(selectedTask.id));
      setFinished(true);
      dispatch(resetSelectedTask());
    }
  };

  const getDate = () => {
    if (
      todo.date.toString().slice(0, 10) === new Date().toString().slice(0, 10)
    ) {
      return "Aujourd'hui";
    } else if (todo.date === "") {
      return "";
    } else {
      return format(todo.date, "dd MMMM yyyy", { locale: fr });
    }
  };

  return (
    <TodoItemContainer>
      <FlexContainer>
        <TodoCheckbox onClick={toggleTask}>
          <Check color="white" />
        </TodoCheckbox>
        <TaskDetails>
          <TaskTitle onClick={handleTaskClick}>{todo.title}</TaskTitle>
          <TaskUser>{todo.taskUser}</TaskUser>
        </TaskDetails>
      </FlexContainer>
      <TaskDate>{getDate()}</TaskDate>
    </TodoItemContainer>
  );
};

export default TodoItem;
