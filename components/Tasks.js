import { TasksContainer } from "../styles/Container.styled";

import Done from "./Done/Done";
import Todo from "./Todo/Todo";

function Tasks({ input, setInput, finished, setFinished }) {
  return (
    <TasksContainer>
      <Todo
        input={input}
        setInput={setInput}
        finished={finished}
        setFinished={setFinished}
      />
      <Done finished={finished} setFinished={setFinished} />
    </TasksContainer>
  );
}

export default Tasks;
