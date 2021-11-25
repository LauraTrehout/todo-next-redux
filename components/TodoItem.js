
import { Check } from '@styled-icons/bootstrap/Check'
import { TodoCheckbox } from "../styles/Checkbox.styled";
import { FlexContainer } from "../styles/Container.styled";
import { TaskTitle } from "../styles/Title.styled";

const TodoItem = ({ todo, done, setDone, selected, setSelected }) => {

    const handleBoxClick = () => {
        setSelected(todo)
    }

  return (
    <FlexContainer>
      <TodoCheckbox onClick={handleBoxClick}>
          <Check color='white'/>
      </TodoCheckbox>
      <TaskTitle>
      {todo.title}
      </TaskTitle>
    </FlexContainer>
  );
};

export default TodoItem;
