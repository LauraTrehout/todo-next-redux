import styled from "styled-components";

export const AllTasksTitle = styled.h2`
  background-color: ${({ theme }) => theme.colors.main};
  color: #fff;
  font-size: 1rem;
  padding: 1.2rem;
  margin: 0;
  font-weight: 500;
`;

export const DoneTaskTitle = styled(AllTasksTitle)`
  color: ${({ theme }) => theme.colors.main};
  background-color: #e8ded1;
  margin-left: 0;
  padding: 0.6rem;
`;

export const SelectedTaskTitle = styled(AllTasksTitle)`
  background-color: #fff;
  color: #000;
  padding: 0;
  padding-left: 1rem;
  font-size: 1.2rem;
  font-weight: normal;
`;

export const TaskTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.5rem;
  cursor: pointer;
`;

export const TaskUser = styled(SelectedTaskTitle)`
background-color: transparent;
font-weight: 400;
padding-left: 0.5rem;
`
export const UserEmail = styled.p`
color: ${({ theme }) => theme.colors.greyTxt};
`
export const TaskDate = styled(UserEmail)``

export const CrossedOutTask = styled(TaskTitle)`
  text-decoration: line-through;
`;

export const CrossedOutUser = styled(TaskUser)`
text-decoration: line-through;
`
export const CrossedOutDate = styled(TaskDate)`
text-decoration: line-through;
`


export const Description = styled(TaskTitle)`
  padding-left: 15px;
`;







