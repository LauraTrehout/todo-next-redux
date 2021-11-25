import { Check } from '@styled-icons/bootstrap/Check'

import { DoneCheckbox } from "../styles/Checkbox.styled";
import { FlexContainer } from "../styles/Container.styled";
import { CrossedOutTask } from "../styles/Title.styled";

const DoneItem = ({ doneItem }) => {
    return ( 
        <FlexContainer>
      <DoneCheckbox><Check color='white' size='20px' /></DoneCheckbox>
      <CrossedOutTask>
      {doneItem.title}
      </CrossedOutTask>
    </FlexContainer>
    );
}
 
export default DoneItem;