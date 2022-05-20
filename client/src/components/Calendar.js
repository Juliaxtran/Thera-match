import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import UserContext from './AppContext';
import { useContext } from 'react';




export default function ReactCalendar({recipient}) {

  const [date, setDate] = useState(new Date());
  const { user } = useContext(UserContext)
  const name = `${user.first_name} ${user.last_name}`



  const recipientInfo = recipient;
  console.log('recipient', recipient)
  console.log('F&L name', name)

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post(`/messages/book`, { recipientInfo, date, name }, { withCredentials: true })
      .then((data) => {
        console.log('Successful, neat!')
      })
  }


  const onChange = (date) => {
    setDate(date);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
    <button type='submit' className='primary-button'>Request appointment</button>
    </form>
  )
}
