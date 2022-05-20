import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import UserContext from './AppContext';
import { useContext } from 'react';




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
          setTimeout(() => {
            setNotification(`Appointment has been requested with ${therapist_name}`)
          },100 )

        } else  {
          setNotification("Error has occured when trying to book an appointment. Try again later ")
        }
      })
  }


  const onChange = (date) => {
    setDate(date);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
      {date.toString()}
      {recipient ?
       (<button type='submit' className='primary-button'>
       Request appointment with {therapist_name}</button>)  : (<button type='submit' className='primary-button'>
      Click a therapist to book an appointment</button>) }

    </form>
    {notification}
    </>
  )
}

