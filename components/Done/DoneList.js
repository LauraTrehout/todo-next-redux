import { DoneListContainer } from "../../styles/Container.styled";
import DoneItem from "./DoneItem";

const DoneList = ({
  done,
  selected,
  setSelected,
  selectedUser,
  setSelectedUser,
  selectedDate,
  setSelectedDate,
  finished,
  setFinished,
}) => {
  return (
    <DoneListContainer>
      {done.map((doneItem, index) => (
        <DoneItem
          key={index}
          doneItem={doneItem}
          selected={selected}
          setSelected={setSelected}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          finished={finished}
          setFinished={setFinished}
        />
      ))}
    </DoneListContainer>
  );
};

export default DoneList;
