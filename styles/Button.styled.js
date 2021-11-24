import styled from "styled-components";
import { AllTasksTitle } from "./Title.styled";

export const CheckedButton = styled.button`
color: ${({theme}) => theme.colors.greyTxt};
width: 200px;
position: absolute;
top:0;
right:0;
transform: translateX(-10px);
background-color: #fff;
border-radius: 3px;
border: solid 0.5px ${({theme}) => theme.colors.bg};
padding: 10px;
font-size: 0.7rem;
margin-top: 7px;
cursor:pointer;
`

export const AddUser = styled.button`
border-radius: 50px;
border: dashed 0.5px ${({theme}) => theme.colors.greyTxt};
background-color: #fff;
font-size: 20px;
padding: 7px;
height: 40px;
width:40px;
cursor:pointer;
`

export const AddDate = styled(AddUser)``

export const CommentButton = styled(AllTasksTitle)`
width: 150px;
text-align: center;
margin: 10px;
border-radius: 5px;
cursor:pointer;
`