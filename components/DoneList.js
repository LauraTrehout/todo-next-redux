import { DoneListContainer } from "../styles/Container.styled";
import DoneItem from "./DoneItem";

const DoneList = ({ done, setDone }) => {
    
  return (
      
    <DoneListContainer>
      {done.map((doneItem, index) => (
        <DoneItem key={index} doneItem={doneItem} />
      ))}
    </DoneListContainer>
  );
};

export default DoneList;
