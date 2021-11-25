import { TimeFive } from "@styled-icons/boxicons-regular";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AddDate } from "../../styles/Button.styled";
import { DateSelectorDiv, SelectorFlex } from "../../styles/Selector.styled";

const DateSelector = ({
  toggleTaskDate,
  selectedDate,
  setSelectedDate,
  showDate,
  setShowDate,
}) => {
  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };
  return (
    <DateSelectorDiv>
      <SelectorFlex>
        <AddDate onClick={toggleTaskDate}>
          <TimeFive color="grey" size="20" />
        </AddDate>
        ÉCHÉANCE
      </SelectorFlex>
      {showDate && (
        <DatePicker
          selected={selectedDate}
          onChange={handleSelectDate}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
        />
      )}
    </DateSelectorDiv>
  );
};

export default DateSelector;
