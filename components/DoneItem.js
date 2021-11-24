import { StyledCheckbox } from "../styles/Checkbox.styled";
import { FlexContainer } from "../styles/Container.styled";
import { CrossedOutTask } from "../styles/Title.styled";

const DoneItem = ({ doneItem }) => {
    return ( 
        <FlexContainer>
      <StyledCheckbox></StyledCheckbox>
      <CrossedOutTask>
      {doneItem.title}
      </CrossedOutTask>
    </FlexContainer>
    );
}
 
export default DoneItem;