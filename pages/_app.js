import { wrapper } from "../redux/store";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "../components/Header";
import { MainContainer } from "../styles/Container.styled";

const theme = {
  colors: {
    main: "#DB4437",
    bg: "#F2F2F2",
    greyTxt: "#909191",
  },
};

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap');
* { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

body {
    dispaly: flex;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    background-color: #F2F2F2;
    margin: 0;
    padding: 0
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default wrapper.withRedux(MyApp);
