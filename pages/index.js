import { useState } from "react";
import Head from "next/head";

import Tasks from "../components/Tasks";
import SelectedTask from "../components/SelectedTask";

import { MainContainer } from "../styles/Container.styled";


export default function Home() {
  const [input, setInput] = useState("");
  const [finished, setFinished] = useState(false);

  return (
    <div>
      <Head>
        <title>todoist</title>
        <meta name="todo app" content="todo app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <MainContainer>
            <Tasks
              input={input}
              setInput={setInput}
              finished={finished}
              setFinished={setFinished}
            />
            <SelectedTask
              finished={finished}
              setFinished={setFinished}
            />
            </MainContainer>
      </main>
    </div>
  );
}
