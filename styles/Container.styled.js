import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  background-color: @fff;
`;

export const SelectedTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
padding-left: 1rem;
`;

export const DoneContainer = styled(TodoListContainer)`
`
export const TaskDescription = styled.div`
  background-color: #fff;
  width: 100%;
  height: 30vh;
  border-bottom: solid 1px lightgrey;
  margin-left: 20px;
`

export const CommentSection = styled(TaskDescription)`
  height: 70px;
  display: flex;
  justify-content: flex-end;
`
