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
import Selectors from "./Selectors/Selectors";
import { useDispatch, useSelector } from "react-redux";
import { newDone } from "../redux/actions/tasks.actions";
import { deleteDone } from "../redux/actions/tasks.actions";
import { deleteTodo } from "../redux/actions/tasks.actions";
import { newTodo } from "../redux/actions/tasks.actions";

function SelectedTask({ finished, setFinished, taskDate, setTaskDate }) {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.selectedTask.selectedTask);

  const toggleTask = () => {
    setFinished(!finished);
    if (!finished) {
      dispatch(newDone(selectedTask));
      dispatch(deleteTodo(selectedTask.id));
    }
    if (finished) {
      dispatch(deleteDone(selectedTask.id), dispatch(newTodo(selectedTask)));
    }
  };

  return (
    <SelectedTaskContainer>
      <SelectedHeader>
        <SelectedTaskTitle>
          {selectedTask ? selectedTask.title : null}
        </SelectedTaskTitle>
        {selectedTask && (
          <CheckedButton onClick={toggleTask}>
            {!finished && <Check size="25" />}
            {finished && <Todo size="25" />}
            {!finished ? "MARQUÉ COMME TERMINÉ" : "A RÉALISER"}
          </CheckedButton>
        )}
      </SelectedHeader>
      {selectedTask && (
        <>
          <Selectors taskDate={taskDate} setTaskDate={setTaskDate} />
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
