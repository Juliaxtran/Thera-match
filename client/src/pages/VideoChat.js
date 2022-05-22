import { AppBar } from "@mui/material";
import VideoPlayer from "../components/VideoPlayer";
import Notification from "../components/Notifications";
import Options from "../components/Options";
import HomeNav from "../components/HomeNav";
import '../stylesheet/VideoChat.css';



const VideoChat = () => {

  return (
    <div className="video-chat">
      <HomeNav />
      <AppBar position="static" color="inherit">
        <h1 className="video-chat-header">Video Chat</h1>
      </AppBar>
      <div className="video-container">
        <VideoPlayer />
        <Options>
          <Notification />
        </Options>
      </div>
    </div>
  )
}

export default VideoChat