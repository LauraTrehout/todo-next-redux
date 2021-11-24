import styled from "styled-components";

export const Input = styled.input`
  background-color: #fff;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bg};
  padding: 1rem;
  outline: none;

  ::placeholder {
    color: lightgrey;
  }
`;

export const TextArea = styled.textarea`
  outline: none;
  width: 90%;
  height: 20vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border: solid 0.5px lightgrey;
`;
