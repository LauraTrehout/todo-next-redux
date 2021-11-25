import { TimeFive } from "@styled-icons/boxicons-regular/TimeFive";
import { useState } from "react";
import { AddDate, AddUser } from "../styles/Button.styled";
import { FlexContainer } from "../styles/Container.styled";
import {
  DateSelector,
  SelectorFlex,
  SelectUser,
  UserSelector,
} from "../styles/Selector.styled";

import data from "../users.js";

const Selectors = () => {
  const [users, setUsers] = useState(data);
  const [showUsers, setShowUsers] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const toggleUserClick = () => {
    setShowUsers(!showUsers);
  };
  const toggleUserDate = () => {
    setShowDate(!showDate);
  };

  console.log(showUsers);
  console.log(showDate);

  return (
    <FlexContainer>
      <UserSelector>
          <SelectorFlex>
        <AddUser onClick={toggleUserClick}>+</AddUser>
        <p>ATTRIBUER À</p>
        </SelectorFlex>
        {showUsers &&
      <SelectUser>{users.data.map(user => <li key={user.id}> {user.name}</li>)}</SelectUser>}
      </UserSelector>
      <DateSelector>
          <SelectorFlex>
        <AddDate onClick={toggleUserDate}>
          <TimeFive color="grey" size="20" />
        </AddDate>
        ÉCHÉANCE
        </SelectorFlex>
      </DateSelector>
    </FlexContainer>
  );
};

export default Selectors;
