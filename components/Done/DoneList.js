import { DoneListContainer } from "../../styles/Container.styled";
import DoneItem from "./DoneItem";
import { useDispatch, useSelector } from 'react-redux'
import { newDone } from '../../redux/actions/done.actions'


const DoneList = ({
  selectedUser,
  setSelectedUser,
  selectedDate,
  setSelectedDate,
  finished,
  setFinished,
}) => {
const done = useSelector(state => state.doneReducer.done)

  return (
    <DoneListContainer>
      {done.map((doneItem, index) => (
        <DoneItem
          key={index}
          doneItem={doneItem}
          finished={finished}
          setFinished={setFinished}
        />
      ))}
    </DoneListContainer>
  );
};

export default DoneList;
