import styled from "styled-components";

export const AllTasksTitle = styled.h2`
background-color: ${({theme}) => theme.colors.main};
color: #fff;
font-size: 0.8rem;
padding: 1rem;
`

export const DoneTaskTitle = styled(AllTasksTitle)`
color: ${({theme}) => theme.colors.main};
background-color: ${({theme}) => theme.colors.bg};
`

export const SelectedTaskTitle = styled(AllTasksTitle)`
background-color: #fff;
color: #000;
`

export const TaskTitle = styled.h3`
font-size: 1rem;
font-family: bold;
padding: 0.5rem;
`