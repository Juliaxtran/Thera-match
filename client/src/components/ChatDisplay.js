import axios from 'axios'
import {  useEffect } from 'react'
import  classNames  from 'classnames';
import UserContext from './AppContext';
import { useContext } from 'react';



const ChatDisplay = ({ therapist_id, messages, setMessages}) => {

const { user } = useContext(UserContext)


  useEffect(() => {
    axios.get('http://localhost:9000/messages', { params: { therapist_id: therapist_id }, withCredentials: true }).then(res => {
    setMessages(res.data)
    })
      .catch((e) => console.log(e));
  }, [therapist_id])


  const messageList = messages.map((message) => {
    const messageClass = classNames ("message__item", {
      "message__item-right" : user.id !== message.user_id,
    })

    if (messageClass === "message__item-right") {
      return (<h2 key={message.id} className={messageClass}>{`${message.therapist_name} says : ${message.message}`}</h2>)
    }
    return (<h2 key={message.id} className={messageClass}>{`${message.user_name} says : ${message.message}`}</h2>)
  })


  return (
    <div className="chat-display">
      {messageList}
    </div>
  )
}

export default ChatDisplay