import axios from 'axios'
import {  useEffect } from 'react'


const ChatDisplay = ({ therapist_id, messages, setMessages}) => {


  useEffect(() => {
    axios.get('http://localhost:9000/messages', { params: { therapist_id: therapist_id }, withCredentials: true }).then(res => {
    setMessages(res.data)
    })
      .catch((e) => console.log(e));
  }, [therapist_id])


  const messageList = messages.map((message) => {
    return (<h2 key={message.id}>{`${message.name} says : ${message.message}`}</h2>)
  })


  return (
    <div className="chat-display">
      {messageList}
    </div>
  )
}

export default ChatDisplay