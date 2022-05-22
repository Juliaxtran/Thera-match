import axios from 'axios'
import {  useEffect } from 'react'
import  classNames  from 'classnames';
import UserContext from './AppContext';
import { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const ChatDisplay = ({ recipient , messages, setMessages}) => {

const { user } = useContext(UserContext);

const recipient_id = recipient.user_id
const recipient_image = recipient.image
const therapist_name = recipient.therapist_name
const recipient_user = recipient.user_name

  useEffect(() => {
    axios.get('/messages', { params: { recipient_id }, withCredentials: true }).then(res => {
    setMessages(res.data)
    })
      .catch((e) => console.log(e));
  }, [recipient])


  const messageList = messages.map((message) => {
    const messageClass = classNames ("message__item", {
      "message__item-right" : user.id !== message.user_id,
    })

    if (message.user_id === user.id) {

      return (
        <div className='message-bubble'>
      <h2 key={message.id} className={messageClass}>{`You : ${message.message}`}</h2>
      <div className='time-stamp' >{message.created_at}</div>
      </div>)
    }



    return (
    <div className='message-bubble'>
    <h2 key={message.id} className={messageClass}>{`${message.user_name} says : ${message.message}`}</h2>
    <div className = 'timestamp'>
    {message.created_at}
    </div>
    </div>)
  })


  return (
    <>
    <div className='chat-display-header'>
    <Stack direction="row" spacing={2}>
    <Avatar className = 'chat-display-image' src={recipient_image} />
    {user.type === 'therapist' ? <h1>{recipient_user}</h1> : <h1>{therapist_name}</h1>}

    </Stack>
    </div>
    <div className="chat-display">
      {messageList}
    </div>
    </>
  )
}

export default ChatDisplay