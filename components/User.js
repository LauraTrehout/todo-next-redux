import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle";
import { useState } from "react";

import { UserList } from "../styles/list.styled";

const User = ({ todos, setTodos, selected, setSelected, user, selectedUser, setSelectedUser, showUsers, setShowUsers }) => {
  
  const handleUserClick = () => {
    // setSelectedUser(user.name);
    setShowUsers(false)
    // setSelected(selected, (selected.user = user))
  };

  return (
    <UserList onClick={handleUserClick}>
      <UserCircle size="20" />
      {user.name}
    </UserList>
  );
};

export default User;
