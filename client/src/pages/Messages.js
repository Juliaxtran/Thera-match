import MatchContainer from "../components/MatchContainer"
import ChatContainer from "../components/ChatContainer"
import HomeNav from "../components/HomeNav"
import { useState } from "react"
import '../Messages.css'


const Messages = () => {
  const [therapist, setTherapist] = useState({});
  return (
    <>
    <HomeNav  />
   <h1> Messages </h1>
  <div className="messages-page">
    <MatchContainer setTherapist={setTherapist}/>
    <ChatContainer  therapist={therapist}/>
  </div>
  </>
  )
  }

  export default Messages