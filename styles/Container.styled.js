import styled from "styled-components";

export const FlexContainer = styled.div`
display: flex;
align-items: center;
`

export const TasksContainer = styled.div`
display: flex;
flex-direction: column;
width: 25%;
height: 100%;
margin-left: 0.8rem;
background-color: @fff;
`

export const SelectedTaskContainer = styled.div`
display: flex;
flex-direction: column;
width: 70%;
background-color: ${({theme}) => theme.colors.bg};
position: relative;
`
export const TodoContainer = styled.div`
display: flex;
flex-direction: column; 
`

export const DoneListContainer = styled(TodoContainer)`
background-color: #fff;
`

export const DoneContainer = styled.div`
display: flex;
flex-direction: column; 
`
export const TodoListContainer = styled.div`
display: flex;
flex-direction: column; 
background-color: #fff;
`
export const TaskDescription = styled.div`
background-color: #fff;
width: 100%;
height:40vh;
border-bottom: solid 1px lightgrey;
`

export const CommentSection = styled(TaskDescription)`
height: 70px;
display:flex;
justify-content: flex-end;
`

