import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  background-color: @fff;
`;

export const SelectedTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  background-color: ${({ theme }) => theme.colors.bg};
  position: relative;
`;
export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DoneListContainer = styled(TodoContainer)`
  background-color: #fff;
`;

export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const TodoItemContainer = styled(FlexContainer)`
justify-content: space-between;
  padding: 0.5rem;
  border-left: solid 5px #fff;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bg};
    border-left: solid 5px ${({ theme }) => theme.colors.main};
  }
`;
export const DoneItemContainer = styled(TodoItemContainer)``;

export const DoneContainer = styled(TodoListContainer)``;

export const TaskDescription = styled.div`
  background-color: #fff;
  width: 95%;
  height: 30vh;
  margin-left: 20px;
  font-size: 0.9rem;
  padding-left: 15px;
`;

export const CommentSection = styled(TaskDescription)`
  height: 70px;
  display: flex;
  justify-content: flex-end;
  border-top: solid 1.8px ${({ theme }) => theme.colors.bg};
  padding: 0;
`;

export const UserDetails = styled(TodoListContainer)`
  padding-left: 10px;
`;

export const TaskDetails = styled(TodoItemContainer)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 0;
  border-left: none;
  &:hover {
    border-left: none;
  }
`;
