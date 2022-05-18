import ChatInput from "./ChatInput"
import ChatDisplay from "./ChatDisplay"
import { useState } from "react";

const ChatContainer = ({therapist_id}) => {
  const [messages, setMessages] = useState([]);
  return (

  <div className="chat-container">
     {console.log("therapistId", therapist_id)}
   <ChatDisplay therapist_id = {therapist_id} messages={messages} setMessages={setMessages} />
  <ChatInput therapist_id = {therapist_id} setMessages={setMessages}/>
  </div>
  )
  }

  export default ChatContainer