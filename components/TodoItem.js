import { Check } from "@styled-icons/bootstrap/Check";
import { TodoCheckbox } from "../styles/Checkbox.styled";
import { FlexContainer } from "../styles/Container.styled";
import { TaskTitle } from "../styles/Title.styled";

const TodoItem = ({
  todo,
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
  const handleBoxClick = () => {
    setSelected(todo);
    setFinished(false);
    // setSelectedUser({})
  };

  return (
    <FlexContainer>
      <TodoCheckbox onClick={handleBoxClick}>
        <Check color="white" />
      </TodoCheckbox>
      <TaskTitle>
        {todo.title}
        <p>{selectedUser.name}</p>
        <p>{selectedDate}</p>
      </TaskTitle>
    </FlexContainer>
  );
};

export default TodoItem;
