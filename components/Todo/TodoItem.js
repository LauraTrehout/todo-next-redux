import fr from "date-fns/locale/fr";
import format from "date-fns/format";

import { useSelector, useDispatch } from "react-redux";
import { newDone, deleteTodo } from "../../redux/actions/tasks.actions";

import data from "../../users.js";

import { Check } from "@styled-icons/bootstrap/Check";
import { TodoCheckbox } from "../../styles/Checkbox.styled";
import {
  TodoItemContainer,
  TaskDetails,
  FlexContainer,
} from "../../styles/Container.styled";
import { TaskDate, TaskTitle, TaskUser } from "../../styles/Title.styled";
import {
  newSelectedTask,
  resetSelectedTask,
} from "../../redux/actions/selectedTask.actions";
import { useState } from "react";

const TodoItem = ({ todo, setFinished }) => {
  const [users, setUsers] = useState(data);
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.selectedTask.selectedTask);
  const handleTaskClick = () => {
    dispatch(newSelectedTask(todo));
  };

  const toggleTask = () => {
    if (selectedTask !== "") {
      dispatch(newDone(selectedTask));
      dispatch(deleteTodo(selectedTask.id));
      setFinished(true);
      dispatch(resetSelectedTask());
    }
  };

  const getDate = () => {
    if (
      todo.date.toString().slice(0, 10) === new Date().toString().slice(0, 10)
    ) {
      return "Aujourd'hui";
    } else if (todo.date === "") {
      return "";
    } else {
      return format(todo.date, "dd MMMM yyyy", { locale: fr });
    }
  };

  const getUser = () => {
    if (todo.taskUser !== "") {
      return users.data.map((user) => {
        if (todo.taskUser === user.id) {
          return user.name;
        }
      });
    } else {
      return "";
    }
  };

  return (
    <TodoItemContainer>
      <FlexContainer>
        <TodoCheckbox onClick={toggleTask}>
          <Check color="white" />
        </TodoCheckbox>
        <TaskDetails>
          <TaskTitle onClick={handleTaskClick}>{todo.title}</TaskTitle>
          <TaskUser>{getUser()}</TaskUser>
        </TaskDetails>
      </FlexContainer>
      <TaskDate>{getDate()}</TaskDate>
    </TodoItemContainer>
  );
};

export default TodoItem;
