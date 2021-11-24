import { Check } from '@styled-icons/bootstrap/Check'

import { StyledCheckbox } from "../styles/Checkbox.styled";
import { FlexContainer } from "../styles/Container.styled";
import { CrossedOutTask } from "../styles/Title.styled";

const DoneItem = ({ doneItem }) => {
    return ( 
        <FlexContainer>
      <StyledCheckbox><Check color='white' /></StyledCheckbox>
      <CrossedOutTask>
      {doneItem.title}
      </CrossedOutTask>
    </FlexContainer>
    );
}
 
export default DoneItem;