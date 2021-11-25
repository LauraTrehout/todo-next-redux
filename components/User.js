import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle";
import { useState } from "react";

import { UserList } from "../styles/list.styled";

const User = ({ user, selectedUser, setSelectedUser, showUsers, setShowUsers }) => {
  
  const handleUserClick = () => {
    setSelectedUser(user);
    setShowUsers(false)
  };
  
  return (
    <UserList onClick={handleUserClick}>
      <UserCircle size="20" />
      {user.name}
    </UserList>
  );
};

export default User;
