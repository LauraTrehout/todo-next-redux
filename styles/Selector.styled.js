import styled from "styled-components";

export const UserSelectorDiv = styled.div`
  width: 200px;
  padding: 5px;
  margin: 15px;
  color: ${({ theme }) => theme.colors.greyTxt};
  font-size: 0.8rem;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 2px 2px lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const SelectorFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
`;

export const DateSelectorDiv = styled(UserSelectorDiv)``;

export const SelectUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  width: 300px;
  font-weight: 500;
  position: absolute;
  top: 0;
  transform: translateY(120px);
  margin-left: 20px;
  padding: 1.5rem; ;
`;
