import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.bg};
    margin: 0;
    padding: 0
}
`;
export default GlobalStyles;
