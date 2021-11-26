import { Check } from "@styled-icons/bootstrap/Check";
import { TodoCheckbox } from "../../styles/Checkbox.styled";
import { TodoItemContainer } from "../../styles/Container.styled";
import { TaskTitle } from "../../styles/Title.styled";
import { useDispatch, useSelector } from "react-redux";
import { newSelectedTask } from "../../redux/actions/selectedTask.actions";

const TodoItem = ({
  todo,
  setFinished,
}) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.selectedTask);

  const handleBoxClick = () => {
    dispatch(newSelectedTask(todo));
    setFinished(false);
  };

  return (
    <TodoItemContainer>
      <TodoCheckbox 
      onClick={handleBoxClick}
      >
        <Check color="white" />
      </TodoCheckbox>
      <TaskTitle>{todo.title}</TaskTitle>
    </TodoItemContainer>
  );
};

export default TodoItem;
