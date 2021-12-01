import { TasksContainer } from "../styles/Container.styled";

import Done from "./Done/Done";
import Todo from "./Todo/Todo";

function Tasks({ input, setInput, finished, setFinished, taskDate, setTaskDate}) {
  return (
    <TasksContainer>
      <Todo
        input={input}
        setInput={setInput}
        finished={finished}
        setFinished={setFinished}
        taskDate={taskDate}
        setTaskDate={setTaskDate}
      />
      <Done
        finished={finished}
        setFinished={setFinished}
        taskDate={taskDate}
        setTaskDate={setTaskDate}
      />
    </TasksContainer>
  );
}

export default Tasks;
