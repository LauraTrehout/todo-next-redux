import { Check } from "@styled-icons/bootstrap/Check";
import { TodoCheckbox } from "../../styles/Checkbox.styled";
import { FlexContainer, TodoItemContainer } from "../../styles/Container.styled";
import { TaskTitle } from "../../styles/Title.styled";

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
  setFinished,
}) => {
  const handleBoxClick = () => {
    setSelected(todo);
    setFinished(false);
  };

  // const user = selected.user


  return (
    <TodoItemContainer>
      <TodoCheckbox onClick={handleBoxClick}>
        <Check color="white" />
      </TodoCheckbox>
      <TaskTitle>
        {todo.title}
        {/* {selectedUser} */}
      </TaskTitle>
    </TodoItemContainer>
  );
};

export default TodoItem;
