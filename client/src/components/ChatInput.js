import { useState } from 'react';
import axios from 'axios';
// import UserContext from './AppContext';
// import { useContext } from 'react';

const ChatInput = ({ recipient, setMessages }) => {

  const [message, setMessage] = useState("");

  const recipient_id = recipient.user_id;

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/messages`, { recipient_id, message }, { withCredentials: true })
      .then((data) => {
        setMessages(prev => [...prev, { message: data.data[0].message, user_id: data.data[0].user_id, recipient_id: data.data[0].recipient_id, id: data.data[0].id, name: data.data[0].name }])
        setMessage('');
      })
      .catch((e) => console.log(e))

  }



  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className="chat-input"
          name="message"
          placeholder="Write your message here"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }} />

        <button type="submit" className="primary-button"> Submit </button>
      </form>
    </div>
  )
}

export default ChatInput