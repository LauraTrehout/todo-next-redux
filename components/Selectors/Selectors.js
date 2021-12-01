import { useState } from "react";

import data from "../../users.js";
import UserSelector from "./UserSelector";
import DateSelector from "./DateSelector";

import { FlexContainer } from "../../styles/Container.styled";

const Selectors = () => {
  const [users, setUsers] = useState(data);
  const [showUsers, setShowUsers] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const toggleUserClick = () => {
    setShowUsers(!showUsers);
  };
  const toggleTaskDate = () => {
    setShowDate(!showDate);
  };

  return (
    <FlexContainer>
      <UserSelector
        users={users}
        setUsers={setUsers}
        showUsers={showUsers}
        setShowUsers={setShowUsers}
        toggleUserClick={toggleUserClick}
      />
      <DateSelector
        toggleTaskDate={toggleTaskDate}
        showDate={showDate}
        setShowDate={setShowDate}
      />
    </FlexContainer>
  );
};

export default Selectors;
