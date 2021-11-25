import styled from "styled-components";

export const AllTasksTitle = styled.h2`
  background-color: ${({ theme }) => theme.colors.main};
  color: #fff;
  font-size: 1rem;
  font-family: bold;
  padding: 1.2rem;
  margin: 0;
`;

export const DoneTaskTitle = styled(AllTasksTitle)`
  color: ${({ theme }) => theme.colors.main};
  background-color: #E8DED1;
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
  font-size: 1rem;
  font-family: bold;
  padding: 0.5rem;
`;

export const CrossedOutTask = styled.p`
  text-decoration: line-through;
  padding-left: 10px;
  font-size: 1rem;
  font-family: bold;
`;

export const Description = styled(TaskTitle)`
  padding-left: 15px;
`;
