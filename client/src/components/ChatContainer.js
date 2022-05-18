import ChatInput from "./ChatInput"
import ChatDisplay from "./ChatDisplay"
import { useState } from "react";

const ChatContainer = ({therapist}) => {
  const [messages, setMessages] = useState([]);
  return (

  <div className="chat-container">
     {console.log("therapistId", therapist)}
   <ChatDisplay therapist = {therapist} messages={messages} setMessages={setMessages} />
  <ChatInput therapist = {therapist} setMessages={setMessages}/>
  </div>
  )
  }

  export default ChatContainer