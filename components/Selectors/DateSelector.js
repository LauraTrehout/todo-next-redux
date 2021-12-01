import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../redux/actions/tasks.actions";

import DatePicker from "react-datepicker";
import fr from "date-fns/locale/fr";

import { TimeFive } from "@styled-icons/boxicons-regular";
import "react-datepicker/dist/react-datepicker.css";
import { AddDate } from "../../styles/Button.styled";
import {
  DateContainer,
  DateSelectorDiv,
  SelectorFlex,
} from "../../styles/Selector.styled";

const DateSelector = ({ toggleTaskDate, showDate, setShowDate }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.selectedTask.selectedTask);

  const handleDateSelect = (date) => {
    dispatch(
      setDate({
        task_date: date,
        task_id: selectedTask.id,
      })
    );
    setShowDate(false);
  };

  return (
    <>
      <DateSelectorDiv>
        <SelectorFlex>
          <AddDate onClick={toggleTaskDate}>
            <TimeFive color="grey" size="20" />
          </AddDate>
          ÉCHÉANCE
        </SelectorFlex>
      </DateSelectorDiv>
      {showDate && (
        <DateContainer>
          <DatePicker
            onSelect={handleDateSelect}
            dateFormat="d MMMM yyyy"
            locale={fr}
            minDate={new Date()}
          />
        </DateContainer>
      )}
    </>
  );
};

export default DateSelector;
