import { DoneContainer } from "../styles/Container.styled";
import { DoneTaskTitle } from "../styles/Title.styled";
import DoneList from "./DoneList";

function Done({ done, setDone }) {
  return (
    <DoneContainer>
      <DoneTaskTitle>Tâches terminées</DoneTaskTitle>
      <DoneList done={done} setDone={setDone}/>
    </DoneContainer>
  );
}

export default Done;
