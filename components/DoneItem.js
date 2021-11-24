import { StyledCheckbox } from "../styles/Checkbox.styled";
import { FlexContainer } from "../styles/Container.styled";
import { TaskTitle } from "../styles/Title.styled";

const DoneItem = ({ doneItem }) => {
    return ( 
        <FlexContainer>
      <StyledCheckbox></StyledCheckbox>
      <TaskTitle>
      {doneItem.title}
      </TaskTitle>
    </FlexContainer>
    );
}
 
export default DoneItem;