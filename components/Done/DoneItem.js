import { Check } from "@styled-icons/bootstrap/Check";

import { DoneCheckbox } from "../../styles/Checkbox.styled";
import {
  DoneItemContainer,
  FlexContainer,
  TaskDetails,
} from "../../styles/Container.styled";
import {
  CrossedOutTask,
  CrossedOutUser,
  TaskDate,
  TaskUser,
} from "../../styles/Title.styled";
import { useDispatch, useSelector } from "react-redux";
import { newSelectedTask } from "../../redux/actions/selectedTask.actions";
import { newTodo, deleteDone } from "../../redux/actions/tasks.actions"

const DoneItem = ({ doneItem, finished, setFinished }) => {
  const dispatch = useDispatch();
  const done = useSelector((state) => state.tasks.done);
  const selectedTask = useSelector(state => state.selectedTask.selectedTask)

  const handleTaskClick = () => {
    dispatch(newSelectedTask(doneItem));
  };

  const toggleTask = () => {
    setFinished(!finished);
    dispatch(newTodo(selectedTask));
    dispatch(deleteDone(selectedTask.id));
  };

  return (
    <DoneItemContainer onClick={handleTaskClick}>
      <FlexContainer>
        <DoneCheckbox onClick={toggleTask}>
          <Check color="white" size="20px" />
        </DoneCheckbox>
        <TaskDetails>
          <CrossedOutTask>{doneItem.title}</CrossedOutTask>
          <CrossedOutUser>{doneItem.taskUser}</CrossedOutUser>
        </TaskDetails>
      </FlexContainer>
      <TaskDate></TaskDate>
    </DoneItemContainer>
  );
};

export default DoneItem;
