import { useState } from "react";
import { FlexContainer } from "../../styles/Container.styled";
import data from "../../users.js";

import UserSelector from "./UserSelector";
import DateSelector from "./DateSelector";

const Selectors = ({
  selectedUser,
  setSelectedUser,
  selectedDate,
  setSelectedDate,
  todos,
  setTodos,
  finished,
  setFinished,
  selected,
  setSelected,
}) => {
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
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </FlexContainer>
  );
};

export default Selectors;
