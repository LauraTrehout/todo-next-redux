import { DoneContainer } from "../../styles/Container.styled";
import { DoneTaskTitle } from "../../styles/Title.styled";
import DoneList from "./DoneList";

function Done({
  finished,
  setFinished,
}) {
  return (
    <>
      <DoneTaskTitle>Tâches terminées</DoneTaskTitle>
      <DoneContainer>
        <DoneList
          finished={finished}
          setFinished={setFinished}
        />
      </DoneContainer>
    </>
  );
}

export default Done;
