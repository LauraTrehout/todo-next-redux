import styled from "styled-components";

export const AllTasksTitle = styled.h2`
background-color: ${({theme}) => theme.colors.main};
color: #fff;
font-size: 0.8rem;
padding: 1rem;
margin: 0;
`

export const DoneTaskTitle = styled(AllTasksTitle)`
color: ${({theme}) => theme.colors.main};
background-color: ${({theme}) => theme.colors.bg};
`

export const SelectedTaskTitle = styled(AllTasksTitle)`
background-color: #fff;
color: #000;
padding: 0;
padding-left: 10px;
`

export const TaskTitle = styled.h3`
font-size: 1rem;
font-family: bold;
padding: 0.5rem;
`