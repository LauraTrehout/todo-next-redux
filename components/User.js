import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle";
import { UserList } from "../styles/list.styled";

const User = ({
  selected,
  setSelected,
  user,
  selectedUser,
  setSelectedUser,
  setShowUsers,
}) => {
  const handleUserClick = () => {
    // setSelectedUser(user.name);
    setShowUsers(false);
    setSelected(selected, (selected.taskUser = user))
};

  return (
    <UserList onClick={handleUserClick}>
      <UserCircle size="20" />
      {user.name}
    </UserList>
  );
};

export default User;
