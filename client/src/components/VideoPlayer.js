import { Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from './SocketContext';
import { useContext } from 'react';



const useStyles = makeStyles((theme) => ({
  video: {
    width: '800px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '3px solid black',
    margin: '10px',
  },
  Typography: {
    fontFamily: [
      "Readex Pro",
      "sans-serif"
    ]
  }
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();



  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={15} md={15}>
            <div className='videoplayer-name'>
            <Typography variant="h5" align="center" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            </div>
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer