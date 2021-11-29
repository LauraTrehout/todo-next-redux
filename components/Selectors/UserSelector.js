import { AddUser } from "../../styles/Button.styled";
import {
  SelectorFlex,
  SelectUser,
  UserSelectorDiv,
} from "../../styles/Selector.styled";
import User from "../User";

const UserSelector = ({
  showUsers,
  setShowUsers,
  toggleUserClick,
  users,
}) => {
  return (
    <>
    <UserSelectorDiv>
      <SelectorFlex>
        <AddUser onClick={toggleUserClick}>+</AddUser>
        <p>ATTRIBUER À</p>
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
            />))}
        </SelectUser>
          )}
          </>
  );
};

export default UserSelector;
