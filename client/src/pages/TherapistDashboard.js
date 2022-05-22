import HomeNav from '../components/HomeNav'
import TherapistMatchContainer from '../components/TherapistMatchContainer'
import { useState } from 'react';
import '../TherapistDashboard.css';
import ChatContainer from '../components/ChatContainer';
import Reviews from '../components/Reviews';
import  {AppBar}  from "@mui/material";


const TherapistDashboard = () => {
  const [recipient, setRecipient] = useState({});
  console.log("Clicked user", recipient)
  return (
    <div>
      <HomeNav />
      <AppBar position="static" color="inherit">
      <h1>Therapist Dashboard</h1>
      </AppBar>
      <div className='therapist-dashboard'>
        <TherapistMatchContainer setRecipient={setRecipient} />
        <ChatContainer recipient={recipient} />
        <Reviews />
      </div>

    </div>
  )
}

export default TherapistDashboard