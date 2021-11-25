import styled from "styled-components";

export const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.colors.main};
  background-color: #fff;
  font-size: 1.2rem;
  font-family: bold;
  height: 60px;
  margin: 0;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-bottom: solid 0.1px ${({ theme }) => theme.colors.bg};
`;

export const SelectedHeader = styled.div`
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
`;
