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
import User from "./User";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Selectors = ({selectedUser, setSelectedUser, selectedDate, setSelectedDate}) => {
  const [users, setUsers] = useState(data);
  const [showUsers, setShowUsers] = useState(false);
  const [showDate, setShowDate] = useState(false);
 
    
  

  const toggleUserClick = () => {
    setShowUsers(!showUsers);
  };
  const toggleUserDate = () => {
    setShowDate(!showDate);
  };

  const handleSelectDate = (date) => {
      setSelectedDate(date)
    }

  return (
      
    <FlexContainer>
      <UserSelector>
          <SelectorFlex>
        <AddUser onClick={toggleUserClick}>+</AddUser>
        <p>ATTRIBUER À</p>
        </SelectorFlex>
        {showUsers &&
      <SelectUser>{users.data.map(user => <User key={user.id} user={user} selectedUser={selectedUser}
        setSelectedUser={setSelectedUser} showUsers={showUsers} setShowUsers={setShowUsers} />)}</SelectUser>}
      </UserSelector>
      <DateSelector>
          <SelectorFlex>
        <AddDate onClick={toggleUserDate}>
          <TimeFive color="grey" size="20" />
        </AddDate>
        ÉCHÉANCE
        </SelectorFlex>
        {showDate && <DatePicker selected={selectedDate} onChange={handleSelectDate} dateFormat='dd/MM/yyyy' minDate={new Date()}/>}
      </DateSelector>
    </FlexContainer>
      
    
  );
};

export default Selectors;
