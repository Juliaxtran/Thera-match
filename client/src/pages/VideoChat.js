import { AppBar } from "@mui/material";
import VideoPlayer from "../components/VideoPlayer";
import Notification from "../components/Notifications";
import Options from "../components/Options";
import HomeNav from "../components/HomeNav";
import '../stylesheet/VideoChat.css';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import { useContext } from "react";
import UserContext from "../components/AppContext";

const VideoChat = () => {

  const { user } = useContext(UserContext);

  return (
    <div className="video-chat">
      <HomeNav />
      <AppBar position="static" color="inherit">
        <div className="message-to-chat">
          <h3></h3>
          <h1 className="video-chat-header">Video Chat</h1>
          {user.type === "therapist" ? <Link to='/therapist-dashboard'>
            <FaIcons.FaEnvelopeOpenText />
          </Link> : <Link to='/messages'>
            <FaIcons.FaEnvelopeOpenText />
          </Link>}
        </div >
      </AppBar>

      <div className="video-container">
        <VideoPlayer />
        <Options>
          <Notification />
        </Options>
      </div>
    </div >
  )
}

export default VideoChat