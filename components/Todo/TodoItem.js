import { Check } from "@styled-icons/bootstrap/Check";
import { TodoCheckbox } from "../../styles/Checkbox.styled";
import { TodoItemContainer } from "../../styles/Container.styled";
import { TaskTitle } from "../../styles/Title.styled";

const TodoItem = ({
  todo,
  selected,
  setSelected,
  selectedUser,
  setSelectedUser,
  selectedDate,
  setSelectedDate,
  setFinished,
}) => {
  const handleBoxClick = () => {
    setSelected(todo);
    setFinished(false);
  };

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
