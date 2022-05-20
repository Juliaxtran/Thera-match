import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

// axios call to trigger appointment on selected day - check message input, similar
// "I am interested in x date" msg template 



export default function ReactCalendar(recipient) {

  const [selectDate, selectedDate] = useState("");
  const recipientPhoneNum = recipient.phone_number;
  console.log('Phone num -->', recipientPhoneNum)

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post(`/messages/book`, { recipientPhoneNum, selectDate }, { withCredentials: true })
      .then((data) => {
        console.log('Successful, neat!')
        selectedDate(prev => [...prev], { selectDate: data.data[0].selectDate })
      })
  }

  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
    </form>
  )
}
