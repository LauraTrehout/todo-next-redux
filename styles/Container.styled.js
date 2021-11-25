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
  flex:4;
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
  padding: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bg};
    border-left: solid 5px ${({ theme }) => theme.colors.main};
  }
`;
export const DoneItemContainer = styled(TodoItemContainer)``;

export const DoneContainer = styled(TodoListContainer)``;

export const TaskDescription = styled.div`
  background-color: #fff;
  width: 100%;
  height: 30vh;
  margin-left: 20px;
  font-family: bold;
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
