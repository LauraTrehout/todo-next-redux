import { Check } from "@styled-icons/bootstrap/Check";

import { DoneCheckbox } from "../../styles/Checkbox.styled";
import { DoneItemContainer } from "../../styles/Container.styled";
import { CrossedOutTask } from "../../styles/Title.styled";
import { useDispatch, useSelector } from "react-redux";
import { newDone } from "../../redux/actions/done.actions";

const DoneItem = ({ setFinished }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(
    (state) => state.selectedTaskReducer.selectedTask
  );
  const done = useSelector((state) => state.doneReducer.done);
  const handleBoxClick = () => {
    dispatch(newDone(selectedTask));
    setFinished(true);
  };
  console.log(done);
  return (
    <DoneItemContainer>
      <DoneCheckbox onClick={handleBoxClick}>
        <Check color="white" size="20px" />
      </DoneCheckbox>
      <CrossedOutTask>{done ? done[0].title : null}</CrossedOutTask>
    </DoneItemContainer>
  );
};

export default DoneItem;
