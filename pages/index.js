import styled, { ThemeProvider } from "styled-components";

import Head from "next/head";
import Image from "next/image";

import Tasks from "../components/Tasks";
import SelectedTask from "../components/SelectedTask";
import Header from "../components/Header";
import GlobalStyles from "../styles/Global";
import { useState } from "react";

const theme = {
  colors: {
    main: "#DB4437",
    bg: "#F2F2F2",
    greyTxt: "#909191",
  },
};
const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.bg};
`;
export default function Home() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);
  const [selected, setSelected] = useState({})

  return (
    <div>
      <Head>
        <title>todoist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <MainContainer>
            <Tasks
              todos={todos}
              setTodos={setTodos}
              input={input}
              setInput={setInput}
              done={done}
              setDone={setDone}
              selected={selected}
              setSelected={setSelected}
              theme={theme}
            />
            <SelectedTask todos={todos} selected={selected}
              setSelected={setSelected} theme={theme}/>
          </MainContainer>
        </ThemeProvider>
      </main>
    </div>
  );
}
