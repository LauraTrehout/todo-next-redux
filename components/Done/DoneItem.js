import { Check } from "@styled-icons/bootstrap/Check";

import { DoneCheckbox } from "../../styles/Checkbox.styled";
import { DoneItemContainer } from "../../styles/Container.styled";
import { CrossedOutTask } from "../../styles/Title.styled";

const DoneItem = ({
  doneItem,
  selectedUser,
  setSelectedUser,
  selected,
  setSelected,
  selectedDate,
  setSelectedDate,
  finished,
  setFinished,
}) => {
  const handleBoxClick = () => {
    setSelected(doneItem);
    setFinished(true);
  };

  return (
    <DoneItemContainer>
      <DoneCheckbox onClick={handleBoxClick}>
        <Check color="white" size="20px" />
      </DoneCheckbox>
      <CrossedOutTask>
        {doneItem.title}
        <p>{selectedUser.name}</p>
      </CrossedOutTask>
    </DoneItemContainer>
  );
};

export default DoneItem;
