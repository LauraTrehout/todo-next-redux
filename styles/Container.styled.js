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
padding: 0.5em;
background-color: #fff;
position: relative;
`
export const TodoContainer = styled.div`
display: flex;
flex-direction: column; 
`

export const DoneListContainer = styled(TodoContainer)``

export const DoneContainer = styled.div`
display: flex;
flex-direction: column; 
`
export const TodoListContainer = styled.div`
display: flex;
flex-direction: column; 
background-color: #fff;
`


