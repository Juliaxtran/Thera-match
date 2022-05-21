import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import UserContext from './AppContext';
import { useContext } from 'react';
import Alert from '@mui/material/Alert';






export default function ReactCalendar({recipient}) {

  const [date, setDate] = useState(new Date());
  const [notification, setNotification] = useState('');

  const { user } = useContext(UserContext)
  const name = `${user.first_name} ${user.last_name}`



  const recipientInfo = recipient;
  const therapist_name = recipient.therapist_name


  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post(`/messages/book`, { recipientInfo, date, name }, { withCredentials: true })
      .then((res) => {
        const success = res.status === 200
        if (success) {
            setNotification( <Alert severity="success"> Appointment has been requested with {therapist_name}</Alert>)
        } else  {
          setNotification("Error has occured when trying to book an appointment. Try again later ")
        }
      })
  }


  const onChange = (date) => {
    setDate(date);
  }

  return (
    <div className='book-appointment'>
      <h1>Book an Appointment</h1>

    <form onSubmit={handleSubmit} className='book-appointment-form'>
      <Calendar onChange={onChange} value={date} />
      <h3>Chosen Date</h3>{date.toString()}
      {recipient ?
       (<button type='submit' className='primary-button'>
       Request appointment - {therapist_name}</button>)  : (<button type='submit' className='primary-button' id='book-appointment-button'>
      Click a therapist to book an appointment</button>) }

    </form>
        {notification}
    </div>
  )
}

