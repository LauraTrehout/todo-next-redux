import { DoneListContainer } from "../styles/Container.styled";
import DoneItem from "./DoneItem";

const DoneList = ({ done, setDone }) => {
    console.log('donelist', done[0]);
  return (
      
    <DoneListContainer>
      {done.map((doneItem, index) => (
        <DoneItem key={index} doneItem={doneItem} />
      ))}
    </DoneListContainer>
  );
};

export default DoneList;
