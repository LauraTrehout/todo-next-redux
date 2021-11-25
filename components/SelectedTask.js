import { Check } from "@styled-icons/bootstrap/Check";
import { Todo } from "@styled-icons/remix-fill/Todo";
import { PencilSquare } from "@styled-icons/bootstrap/PencilSquare";
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
import { useState } from "react";
import Selectors from "./Selectors";

function SelectedTask({
  todos,
  setTodos,
  selected,
  setSelected,
  done,
  setDone,
  selectedUser,
  setSelectedUser,
  selectedDate,
  setSelectedDate,
  finished,
  setFinished
}) {
  

  const toggleTask = () => {
    // if(todos.length && selected){
    setFinished(!finished);
    if (!finished) {
      setDone([...done, selected]);
      setTodos(todos.filter(elem => elem.id !== selected.id))
      setSelected(selected, (selected.completed = true));
    }
    if (finished) {
      setSelected(selected, (selected.completed = false));
      setDone(done.filter(elem => elem.id !== selected.id))
      setTodos([...todos, selected])
    }
  };
console.log('done', done);

  return (
    <SelectedTaskContainer>
      <SelectedHeader>
        <SelectedTaskTitle>{selected.title}</SelectedTaskTitle>
        <CheckedButton onClick={toggleTask}>
          {!finished && <Check size="25" />}
          {finished && <Todo size="25" />}
          {!finished ? "MARQUÉ COMME TERMINÉ" : "A RÉALISER"}
        </CheckedButton>
      </SelectedHeader>
      <Selectors
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
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
    </SelectedTaskContainer>
  );
}

export default SelectedTask;
