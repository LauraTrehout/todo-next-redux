import { DoneListContainer } from "../styles/Container.styled";
import DoneItem from "./DoneItem";

const DoneList = ({
  done,
  setDone,
  selected,
  setSelected,
  selectedUser,
  setSelectedUser,
  selectedDate,
  setSelectedDate,
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
        />
      ))}
    </DoneListContainer>
  );
};

export default DoneList;
