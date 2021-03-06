import { useSelector } from "react-redux";

import Selectors from "./Selectors/Selectors";

import { Check } from "@styled-icons/bootstrap/Check";
import { PencilSquare } from "@styled-icons/bootstrap/PencilSquare";
import { Todo } from "@styled-icons/remix-fill/Todo";
import {
  CommentSection,
  FlexContainer,
  SelectedTaskContainer,
  TaskDescription,
} from "../styles/Container.styled";
import { CheckedButton, CommentButton } from "../styles/Button.styled";
import { Description, SelectedTaskTitle } from "../styles/Title.styled";
import { SelectedHeader } from "../styles/Header.styled";
import { TextArea } from "../styles/Input.styled";

function SelectedTask({ finished }) {
  const selectedTask = useSelector((state) => state.selectedTask.selectedTask);

  return (
    <SelectedTaskContainer>
      <SelectedHeader>
        <SelectedTaskTitle>
          {selectedTask ? selectedTask.title : null}
        </SelectedTaskTitle>
        {selectedTask && (
          <CheckedButton>
            {!finished && <Check size="25" />}
            {finished && <Todo size="25" />}
            {!finished ? "MARQUÉ COMME TERMINÉ" : "A RÉALISER"}
          </CheckedButton>
        )}
      </SelectedHeader>
      {selectedTask && (
        <>
          <Selectors />
          <TaskDescription>
            <FlexContainer>
              <PencilSquare size="25" />
              <Description>Description</Description>
            </FlexContainer>
            <TextArea></TextArea>
          </TaskDescription>
          <CommentSection>
            <CommentButton>COMMENTER</CommentButton>
          </CommentSection>
        </>
      )}
    </SelectedTaskContainer>
  );
}

export default SelectedTask;
