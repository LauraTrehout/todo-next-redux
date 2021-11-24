import { AiOutlineCheck } from "react-icons/bi";
import { SelectedTaskContainer } from "../styles/Container.styled";
import { CheckedButton } from "../styles/Button.styled";
import { SelectedTaskTitle } from "../styles/Title.styled";

function SelectedTask({ selected, setSelected }) {
console.log('selected',selected.title);

  return (
    <SelectedTaskContainer>
      {AiOutlineCheck}
      <SelectedTaskTitle>
        {selected.title}
        <CheckedButton>MARQUE COMME TERMINE`</CheckedButton>
      </SelectedTaskTitle>
    </SelectedTaskContainer>
  );
}

export default SelectedTask;
