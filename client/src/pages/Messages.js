import MatchContainer from "../components/MatchContainer"
import ChatContainer from "../components/ChatContainer"
import HomeNav from "../components/HomeNav"
import { useState } from "react"
import '../Messages.css'


const Messages = () => {
  const [therapist_id, setTherapistId] = useState();
  return (
    <>
    <HomeNav success="false" />
   <h1> Messages </h1>
  <div className="messages-page">
    <MatchContainer setTherapistId={setTherapistId}/>
    <ChatContainer  therapist_id={therapist_id}/>
  </div>
  </>
  )
  }

  export default Messages