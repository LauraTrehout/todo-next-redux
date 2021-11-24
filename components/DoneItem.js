import { StyledCheckbox } from "../styles/Checkbox.styled";
import { FlexContainer } from "../styles/Container.styled";
import { TaskTitle } from "../styles/Title.styled";

const DoneItem = () => {
    return ( 
        <FlexContainer>
      <StyledCheckbox onClick={handleBoxClick}></StyledCheckbox>
      <TaskTitle>
      {done.title}
      </TaskTitle>
    </FlexContainer>
    );
}
 
export default DoneItem;