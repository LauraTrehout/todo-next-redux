import { AiOutlineCheck } from "react-icons/bi";
import {
  CommentSection,
  SelectedTaskContainer,
  TaskDescription,
} from "../styles/Container.styled";
import { CheckedButton, CommentButton } from "../styles/Button.styled";
import { SelectedTaskTitle } from "../styles/Title.styled";
import { SelectedHeader } from "../styles/Header.styled";
import { TextArea } from "../styles/Input.styled";
import { useState } from "react";
import Selectors from "./Selectors";

function SelectedTask({ todos, setTodos, selected, setSelected, done, setDone}) {
  const [finished, setFinished] = useState(false);

  const toggleTask = () => {
    setFinished(!finished)
    if(!finished) {
    setDone([...done, selected])
    console.log('done', done);
}
console.log(finished);


  };

  return (
    <SelectedTaskContainer>
      <SelectedHeader>
        <SelectedTaskTitle>{selected.title}</SelectedTaskTitle>
        <CheckedButton onClick={toggleTask}>{!finished ? 'MARQUÉ COMME TERMINÉ' : 'A RÉALISER'}</CheckedButton>
      </SelectedHeader>
      <Selectors />
      <TaskDescription>
        Description
        <br />
        <TextArea></TextArea>
      </TaskDescription>
      <CommentSection>
        <CommentButton>COMMENTER</CommentButton>
      </CommentSection>
    </SelectedTaskContainer>
  );
}

export default SelectedTask;
