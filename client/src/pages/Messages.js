import MatchContainer from "../components/MatchContainer"
import ChatContainer from "../components/ChatContainer"
import HomeNav from "../components/HomeNav"
import Calendar from "../components/Calendar"
import { useState } from "react"
import '../Messages.css'
import  {AppBar}  from "@mui/material";





const Messages = () => {
  const [recipient, setRecipient] = useState({});
  return (
    <>
    <HomeNav  />
    <AppBar position="static" color="inherit">
   <h1> Messages </h1>
   </AppBar>
  <div className="messages-page">
    <MatchContainer setRecipient={setRecipient}/>
    <ChatContainer  recipient={recipient}/>
    <Calendar recipient={recipient}/>
  </div>
  </>
  )
  }

  export default Messages