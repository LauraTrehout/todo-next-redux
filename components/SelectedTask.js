import { AiOutlineCheck } from "react-icons/bi";
import {
    CommentSection,
  FlexContainer,
  SelectedTaskContainer,
  TaskDescription,
} from "../styles/Container.styled";
import { AddDate, AddUser, CheckedButton, CommentButton } from "../styles/Button.styled";
import { SelectedTaskTitle } from "../styles/Title.styled";
import { SelectedHeader } from "../styles/Header.styled";
import { DateSelector, UserSelector } from "../styles/Selector.styled";
import Selectors from "./Selectors";
import { TextArea } from "../styles/Input.styled";

function SelectedTask({ selected, setSelected }) {
  console.log("selected", selected.title);

  return (
    <SelectedTaskContainer>
      <SelectedHeader>
        <SelectedTaskTitle>{selected.title}</SelectedTaskTitle>
        <CheckedButton>MARQUÉ COMME TERMINÉ</CheckedButton>
      </SelectedHeader>
      <Selectors />
      <TaskDescription>Description<br/>
          <TextArea></TextArea>
      </TaskDescription>
      <CommentSection>
          <CommentButton>
        COMMENTER
          </CommentButton>
      </CommentSection>
    </SelectedTaskContainer>
  );
}

export default SelectedTask;
