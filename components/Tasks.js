import { TasksContainer } from "../styles/Container.styled";

import Done from "./Done/Done";
import Todo from "./Todo/Todo";

function Tasks({
  todos,
  input,
  setInput,
  setTodos,
  done,
  setDone,
  selected,
  setSelected,
  selectedUser,
  setSelectedUser,
  selectedDate,
  setSelectedDate,
  finished,
  setFinished,
}) {
  return (
    <TasksContainer>
      <Todo
        todos={todos}
        input={input}
        setInput={setInput}
        setTodos={setTodos}
        done={done}
        setDone={setDone}
        selected={selected}
        setSelected={setSelected}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        finished={finished}
        setFinished={setFinished}
      />
      <Done
        done={done}
        setDone={setDone}
        selected={selected}
        setSelected={setSelected}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        finished={finished}
        setFinished={setFinished}
      />
    </TasksContainer>
  );
}

export default Tasks;
