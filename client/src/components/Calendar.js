import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// axios call to trigger appointment on selected day - check message input, similar
// "I am interested in x date" msg template 



export default function ReactCalendar() {
  const [selectDate, selectedDate] = useState("");
  
  const recipient_id = recipient.user_id;

  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
    </div>
  )
}
