import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
* { 
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.bg};
    margin: 0;
    padding: 0
}
`;
export default GlobalStyles;
