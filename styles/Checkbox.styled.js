import styled from "styled-components";

export const TodoCheckbox = styled.button`
  width: 30px;
  height: 30px;
  border: solid 0.1px lightgrey;
  border-radius: 100px;
  background-color: #fff;
  cursor: pointer;
`;

export const DoneCheckbox = styled(TodoCheckbox)`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 0;
`;
