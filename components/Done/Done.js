import { useSelector } from "react-redux";

import DoneList from "./DoneList";

import {
  DoneContainer,
  DoneTaskTitleContainer,
} from "../../styles/Container.styled";

function Done({ finished, setFinished }) {
  const done = useSelector((state) => state.tasks.done);
  return (
    <>
      <DoneTaskTitleContainer>
        <p>Tâches terminées</p>
        {done.length}
      </DoneTaskTitleContainer>
      <DoneContainer>
        <DoneList finished={finished} setFinished={setFinished} />
      </DoneContainer>
    </>
  );
}

export default Done;
