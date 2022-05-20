import { Typography, AppBar } from "@mui/material";
import VideoPlayer from "../components/VideoPlayer";
import Notification from "../components/Notifications";
import Options from "../components/Options";
import {makeStyles} from '@material-ui/core/styles';
import HomeNav from "../components/HomeNav";
import '../VideoChat.css';



const VideoChat = () => {

  return (
  <div>
    <HomeNav />
    <AppBar position="static" color="inherit">
      <Typography variant="h2" align="center"> Video Chat</Typography>
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