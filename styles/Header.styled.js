import styled from "styled-components"

export const StyledHeader = styled.h1`
color: ${({ theme }) => theme.colors.main};
padding-left: 1rem;
font-size: 1.2rem;
`

export const SelectedHeader = styled.div`
height: 50px;
background-color: #fff;
display:flex;
align-items:center;
`