import MatchContainer from "../components/MatchContainer"
import ChatContainer from "../components/ChatContainer"
import HomeNav from "../components/HomeNav"
import Calendar from "../components/Calendar"
import { useState } from "react"
import '../stylesheet/Messages.css'
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';





const Messages = () => {
  const [recipient, setRecipient] = useState({});
  return (
    <>
      <HomeNav />
      <AppBar  position="static" color="inherit">
        <div className = "message-to-chat">
        <h3>Hello how are you today.........</h3>
        <h1> Messages </h1>
       <Link to ='/chat'>
        <FaIcons.FaVideo  />
        </Link>
        </div>
      </AppBar>
      <div className="messages-page">
        <MatchContainer setRecipient={setRecipient} />
        <ChatContainer recipient={recipient} />
        <Calendar recipient={recipient} />
      </div>
    </>
  )
}

export default Messages