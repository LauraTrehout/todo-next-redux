import styled from "styled-components";

export const AllTasksTitle = styled.h2`
background-color: ${({theme}) => theme.colors.main};
color: #fff;
font-size: 1rem;
padding: 1.2rem;
margin: 0;
`

export const DoneTaskTitle = styled(AllTasksTitle)`
color: ${({theme}) => theme.colors.main};
background-color: ${({theme}) => theme.colors.bg};
margin-left: 0;
`

export const SelectedTaskTitle = styled(AllTasksTitle)`
background-color: #fff;
color: #000;
padding: 0;
padding-left: 1rem;
font-size: 1.2rem;
font-family: Roboto;
`

export const TaskTitle = styled.h3`
font-size: 1rem;
font-family: bold;
padding: 0.5rem;
`

export const CrossedOutTask = styled.p`
text-decoration:line-through;
padding-left: 10px;
font-size: 0.rem;
`