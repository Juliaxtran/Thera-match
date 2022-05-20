import MatchContainer from "../components/MatchContainer"
import ChatContainer from "../components/ChatContainer"
import HomeNav from "../components/HomeNav"
import Calendar from "../components/Calendar"
import { useState } from "react"
import '../Messages.css'


const Messages = () => {
  const [recipient, setRecipient] = useState({});
  return (
    <>
    <HomeNav  />
   <h1> Messages </h1>
  <div className="messages-page">
    <MatchContainer setRecipient={setRecipient}/>
    <ChatContainer  recipient={recipient}/>
    <Calendar recipient={recipient}/>
  </div>
  </>
  )
  }

  export default Messages