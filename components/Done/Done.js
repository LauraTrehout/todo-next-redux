import { DoneContainer } from "../../styles/Container.styled";
import { DoneTaskTitle } from "../../styles/Title.styled";
import DoneList from "./DoneList";
import { useSelector } from 'react-redux'

function Done({
  finished,
  setFinished,
}) {
  const done = useSelector(state => state.tasks.done)
  return (
    <>
      <DoneTaskTitle>Tâches terminées {done.length}</DoneTaskTitle>
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
