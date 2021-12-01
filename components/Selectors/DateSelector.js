import { TimeFive } from "@styled-icons/boxicons-regular";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AddDate } from "../../styles/Button.styled";
import {
  DateContainer,
  DateSelectorDiv,
  SelectorFlex,
} from "../../styles/Selector.styled";
import { setDate } from '../../redux/actions/tasks.actions'
import fr from "date-fns/locale/fr";
import { useDispatch, useSelector } from "react-redux";

const DateSelector = ({ toggleTaskDate, showDate, taskDate, setTaskDate}) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(state => state.selectedTask.selectedTask)

  const handleDateChange = (date) => {
    setTaskDate(date);
    dispatch(
      setDate({
        task_date: taskDate,
        task_id: selectedTask.id
      })
    );
  };
console.log(taskDate);
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
            selected={taskDate}
            onChange={handleDateChange}
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
