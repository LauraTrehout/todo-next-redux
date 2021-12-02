import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../redux/actions/tasks.actions";

import DatePicker from "react-datepicker";
import fr from "date-fns/locale/fr";
import format from "date-fns/format";

import { TimeFive } from "@styled-icons/boxicons-regular";
import "react-datepicker/dist/react-datepicker.css";
import { AddDate } from "../../styles/Button.styled";
import {
  DateContainer,
  DateSelectorDiv,
  SelectorFlex,
} from "../../styles/Selector.styled";
import { DatepickerInput } from "../../styles/Input.styled";

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

  const getTaskDate = () => {
    if (selectedTask.date !== "") {
      return format(selectedTask.date, "dd/MM/yy", { locale: fr });
    } else {
      return "ÉCHÉANCE";
    }
  };

  return (
    <>
      <DateSelectorDiv>
        <SelectorFlex>
          <AddDate onClick={toggleTaskDate}>
            <TimeFive color="grey" size="20" />
          </AddDate>
          {getTaskDate()}
        </SelectorFlex>
      </DateSelectorDiv>
      {showDate && (
        <DateContainer>
          <DatePicker
            onSelect={handleDateSelect}
            dateFormat="d MMMM yyyy"
            locale={fr}
            minDate={new Date()}
            customInput={<DatepickerInput />}
            
          />
        </DateContainer>
      )}
    </>
  );
};

export default DateSelector;
