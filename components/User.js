import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle";
import { UserList } from "../styles/List.styled";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/actions/tasks.actions";
import { UserEmail } from "../styles/Title.styled";
import { FlexContainer, UserDetails } from "../styles/Container.styled";

const User = ({ user }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.selectedTask.selectedTask);
  const handleUserClick = () => {
    dispatch(
      setUser({
        id_user: user.name,
        id_task: selectedTask.id,
      })
    );
  };

  return (
    <UserList onClick={handleUserClick}>
      <FlexContainer>
      <UserCircle size="40" />
      <UserDetails>
      {user.name}
      <UserEmail>{user.email}</UserEmail>
      </UserDetails>
      </FlexContainer>
    </UserList>
  );
};

export default User;
