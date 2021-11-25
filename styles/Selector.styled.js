import styled from "styled-components";

export const UserSelector = styled.div`
width: 200px;
padding: 5px;
margin: 15px;
color : ${({theme})=> theme.colors.greyTxt};
font-size: 0.8rem;
background-color: #fff;
border-radius:30px;
box-shadow: 2px 2px lightgrey;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
position: relative;
`

export const SelectorFlex = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 90%;
`

export const DateSelector = styled(UserSelector)`
`

export const SelectUser = styled.div`
width:200px;
// position: absolute;
// bottom: 0;
// transform: translateY(-100px)
display: flex;
flex-direction: column;
`