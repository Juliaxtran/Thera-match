import HomeNav from '../components/HomeNav'
import TherapistMatchContainer from '../components/TherapistMatchContainer'
import { useState } from 'react';
import '../stylesheet/TherapistDashboard.css';
import ChatContainer from '../components/ChatContainer';
import Reviews from '../components/Reviews';
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';



const TherapistDashboard = () => {
  const [recipient, setRecipient] = useState({});
 
  return (
    <div>
      <HomeNav />
      <AppBar position="static" color="inherit">
        <div className="message-to-chat">
          <h3>Hello how are you today.........</h3>
          <h1>Therapist Dashboard</h1>
          <Link to='/chat'>
            <FaIcons.FaVideo />
          </Link>
        </div>
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