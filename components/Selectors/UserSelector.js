import { useSelector } from "react-redux";

import User from "../User";

import { AddUser } from "../../styles/Button.styled";
import {
  SelectorFlex,
  SelectUser,
  UserSelectorDiv,
} from "../../styles/Selector.styled";

const UserSelector = ({ showUsers, setShowUsers, toggleUserClick, users }) => {
  const selectedTask = useSelector((state) => state.selectedTask.selectedTask);

  const getUser = () => {
    if (selectedTask.taskUser !== "") {
      return users.data.map((user) => {
        if (selectedTask.taskUser === user.id) {
          return user.name;
        }
      });
    } else {
      return "ATTRIBUER À";
    }
  };


  return (
    <>
      <UserSelectorDiv>
        <SelectorFlex>
          <AddUser onClick={toggleUserClick}>+</AddUser>
          <p>{getUser()}</p>
        </SelectorFlex>
      </UserSelectorDiv>
      {showUsers && (
        <SelectUser>
          {users.data.map((user) => (
            <User
              key={user.id}
              user={user}
              showUsers={showUsers}
              setShowUsers={setShowUsers}
            />
          ))}
        </SelectUser>
      )}
    </>
  );
};

export default UserSelector;
