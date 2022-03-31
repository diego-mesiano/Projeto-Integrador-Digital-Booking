import './style.scss'
import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import { CalendarContainer } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {registerLocale} from  "react-datepicker";
import pt from 'date-fns/locale/pt';

export default function Calendario() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    registerLocale('pt', pt)

  return (
    <CalendarContainer>
        <DatePicker
            locale="pt"
            selected={startDate}
            dateFormat="dd/MM/yyyy"
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            monthsShown={window.screen.width < 722 ? 1 : 2}
            selectsRange
            className="checkin"
            isClearable
            placeholderText="Check in - Check out"
            closeOnScroll={true}
        />
    </CalendarContainer>
  );
}
