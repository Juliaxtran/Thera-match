import axios from 'axios'
import {  useEffect } from 'react'
import  classNames  from 'classnames';
import UserContext from './AppContext';
import { useContext } from 'react';



const ChatDisplay = ({ therapist , messages, setMessages}) => {

const { user } = useContext(UserContext)

const recipient_id = therapist.user_id

  useEffect(() => {
    axios.get('/messages', { params: { recipient_id }, withCredentials: true }).then(res => {
    setMessages(res.data)
    })
      .catch((e) => console.log(e));
  }, [therapist])


  const messageList = messages.map((message) => {
    const messageClass = classNames ("message__item", {
      "message__item-right" : user.id !== message.user_id,
    })

    if (message.user_id === user.id) {
      return (<h2 key={message.id} className={messageClass}>{`You : ${message.message}`}</h2>)
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