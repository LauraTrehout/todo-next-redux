import { DoneContainer } from "../../styles/Container.styled";
import { DoneTaskTitle } from "../../styles/Title.styled";
import DoneList from "./DoneList";

function Done({
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
    <>
      <DoneTaskTitle>Tâches terminées</DoneTaskTitle>
      <DoneContainer>
        <DoneList
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
      </DoneContainer>
    </>
  );
}

export default Done;
