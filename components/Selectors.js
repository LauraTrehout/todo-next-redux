import { AddDate, AddUser } from "../styles/Button.styled";
import { FlexContainer } from "../styles/Container.styled";
import { DateSelector, UserSelector } from "../styles/Selector.styled";

const Selectors = () => {
    return ( 
        <FlexContainer>
        <UserSelector>
          <AddUser>+</AddUser>
          ATTRIBUER À</UserSelector>
      <DateSelector>
          <AddDate></AddDate>ÉCHÉANCE</DateSelector>
          </FlexContainer>
     );
}
 
export default Selectors;