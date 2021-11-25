import { AddUser } from "../../styles/Button.styled";
import { SelectorFlex, SelectUser, UserSelectorDiv } from "../../styles/Selector.styled";
import User from "../User";

const UserSelector = ({
  selectedUser,
  setSelectedUser,
  todos,
  setTodos,
  finished,
  setFinished,
  selected,
  setSelected,
  showUsers,
  setShowUsers,
  toggleUserClick, users
}) => {
  return (
    <UserSelectorDiv>
      <SelectorFlex>
        <AddUser onClick={toggleUserClick}>+</AddUser>
        <p>ATTRIBUER À</p>
      </SelectorFlex>
      {showUsers && (
        <SelectUser>
          {users.data.map((user) => (
            <User
              key={user.id}
              user={user}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              showUsers={showUsers}
              setShowUsers={setShowUsers}
              finished={finished}
              setFinished={setFinished}
              todos={todos}
              setTodos={setTodos}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </SelectUser>
      )}
    </UserSelectorDiv>
  );
};

export default UserSelector;
