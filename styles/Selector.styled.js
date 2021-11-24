import styled from "styled-components";

export const UserSelector = styled.div`
width: 200px;
padding: 7px;
margin: 15px;
color : ${({theme})=> theme.colors.greyTxt};
font-size: 0.8rem;
background-color: #fff;
border-radius:30px;
box-shadow: 2px 2px lightgrey;
display:flex;
justify-content:space-around;
align-items: center;
`

export const DateSelector = styled(UserSelector)`
`