import styled from "styled-components";

export const CheckedButton = styled.button`
color: ${({theme}) => theme.colors.greyTxt};
width: 200px;
position: absolute;
top:0;
right:0;
background-color: #fff;
border: solid 0.5px ${({theme}) => theme.colors.bg};
padding: 15px;
font-size: 0.5rem;
`