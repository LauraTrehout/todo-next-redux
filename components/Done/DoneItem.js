import { useDispatch, useSelector } from "react-redux";
import {
  newSelectedTask,
  resetSelectedTask,
} from "../../redux/actions/selectedTask.actions";
import { newTodo, deleteDone } from "../../redux/actions/tasks.actions";

import fr from "date-fns/locale/fr";
import format from "date-fns/format";

import { Check } from "@styled-icons/bootstrap/Check";
import { DoneCheckbox } from "../../styles/Checkbox.styled";
import {
  DoneItemContainer,
  FlexContainer,
  TaskDetails,
} from "../../styles/Container.styled";
import {
  CrossedOutDate,
  CrossedOutTask,
  CrossedOutUser,
} from "../../styles/Title.styled";
import data from "../../users.js";
import { useState } from "react";


const DoneItem = ({ doneItem, finished, setFinished }) => {
  const [users, setUsers] = useState(data);
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.selectedTask.selectedTask);

  const handleTaskClick = () => {
    dispatch(newSelectedTask(doneItem));
  };

  const toggleTask = () => {
    if (selectedTask !== "") {
      dispatch(newTodo(selectedTask));
      dispatch(deleteDone(selectedTask.id));
      setFinished(!finished);
      dispatch(resetSelectedTask());
    }
  };

  const getDate = () => {
    if (
      doneItem.date.toString().slice(0, 10) ===
      new Date().toString().slice(0, 10)
    ) {
      return "Aujourd'hui";
    } else if (doneItem.date === "") {
      return "";
    } else {
      return format(doneItem.date, "dd MMMM yyyy", { locale: fr });
    }
  };

  const getUser = () => {
    if (doneItem.taskUser !== "") {
      return users.data.map((user) => {
        if (doneItem.taskUser === user.id) {
          return user.name;
        }
      });
    } else {
      return "";
    }
  };
  return (
    <DoneItemContainer>
      <FlexContainer>
        <DoneCheckbox onClick={toggleTask}>
          <Check color="white" size="20px" />
        </DoneCheckbox>
        <TaskDetails>
          <CrossedOutTask onClick={handleTaskClick}>
            {doneItem.title}
          </CrossedOutTask>
          <CrossedOutUser>{getUser()}</CrossedOutUser>
        </TaskDetails>
      </FlexContainer>
      <CrossedOutDate>{getDate()}</CrossedOutDate>
    </DoneItemContainer>
  );
};

export default DoneItem;
