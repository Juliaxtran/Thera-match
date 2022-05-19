import ChatInput from "./ChatInput"
import ChatDisplay from "./ChatDisplay"
import { useState } from "react";

const ChatContainer = ({recipient}) => {
  const [messages, setMessages] = useState([]);
  return (

  <div className="chat-container">
     {console.log("therapistId", recipient)}
   <ChatDisplay recipient = {recipient} messages={messages} setMessages={setMessages} />
  <ChatInput recipient = {recipient} setMessages={setMessages}/>
  </div>
  )
  }

  export default ChatContainer