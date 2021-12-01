import { useSelector } from "react-redux";

import DoneItem from "./DoneItem";

import { DoneListContainer } from "../../styles/Container.styled";

const DoneList = ({ finished, setFinished }) => {
  const done = useSelector((state) => state.tasks.done);

  return (
    <DoneListContainer>
      {done &&
        done.map((doneItem, index) => (
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
