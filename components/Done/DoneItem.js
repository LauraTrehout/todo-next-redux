import { Check } from "@styled-icons/bootstrap/Check";

import { DoneCheckbox } from "../../styles/Checkbox.styled";
import { DoneItemContainer } from "../../styles/Container.styled";
import { CrossedOutTask } from "../../styles/Title.styled";
import { useDispatch, useSelector } from "react-redux";
import { newSelectedTask } from "../../redux/actions/selectedTask.actions";

const DoneItem = ({ doneItem, setFinished }) => {
  const dispatch = useDispatch();
  const done = useSelector((state) => state.tasks.done);
  const handleBoxClick = () => {
    setFinished(true);
    dispatch(newSelectedTask(doneItem))
  };

  return (
    <DoneItemContainer>
      <DoneCheckbox onClick={handleBoxClick}>
        <Check color="white" size="20px" />
      </DoneCheckbox>
      <CrossedOutTask>{doneItem.title}</CrossedOutTask>
    </DoneItemContainer>
  );
};

export default DoneItem;
