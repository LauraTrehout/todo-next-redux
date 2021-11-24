import { AiOutlineCheck } from "react-icons/bi";
import { StyledCheckbox } from "../styles/Checkbox.styled";
import { FlexContainer } from "../styles/Container.styled";
import { TaskTitle } from "../styles/Title.styled";

const TodoItem = ({ todo }) => {
  return (
    <FlexContainer>
      <StyledCheckbox>{/* <AiOutlineCheck /> */}</StyledCheckbox>
      <TaskTitle>
      {todo.title}
      </TaskTitle>
    </FlexContainer>
  );
};

export default TodoItem;
