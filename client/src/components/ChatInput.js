import { useState } from 'react';
import axios from 'axios';
// import UserContext from './AppContext';
// import { useContext } from 'react';

const ChatInput = ({ therapist_id, setMessages }) => {

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:9000/messages`, { therapist_id, message }, { withCredentials: true })
      .then((data) => {
        setMessages(prev =>[...prev, {message: data.data[0].message , user_id: data.data[0].user_id, therapist_id: data.data[0].therapist_id, id: data.data[0].id, name: data.data[0].name } ])
        console.log("dataaaaaaaaaaa", data)
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
            setMessage(e.target.value)
          }} />

        <button type="submit" className="primary-button"> Submit </button>
      </form>
    </div>
  )
}

export default ChatInput