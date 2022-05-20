import ChatInput from "./ChatInput"
import ChatDisplay from "./ChatDisplay"
import { useState } from "react";

const ChatContainer = ({recipient}) => {
  const [messages, setMessages] = useState([]);
  return (

  <div className="chat-container">
   <ChatDisplay recipient = {recipient} messages={messages} setMessages={setMessages} />
  <ChatInput recipient = {recipient} setMessages={setMessages}/>
  </div>
  )
  }

  export default ChatContainer