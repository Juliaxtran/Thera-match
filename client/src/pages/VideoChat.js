import { Typography, AppBar } from "@mui/material";
import VideoPlayer from "../components/VideoPlayer";
import Notification from "../components/Notifications";
import Options from "../components/Options";
import {makeStyles} from '@material-ui/core/styles';
import HomeNav from "../components/HomeNav";



const VideoChat = (props) => {

  return (
  <div>
    <HomeNav />
    <AppBar position="static" color="inherit">
      <Typography variant="h2" align="center"> VideoChat</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notification />
      </Options>

  </div>
  )
  }

  export default VideoChat