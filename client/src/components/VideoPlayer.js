import { Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { SocketContext } from './SocketContext';
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
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
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = (props) => {
  const { name, callAccepeted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
  const classes = useStyles();
  return (
    <div>

      <Grid container className={classes.gridContainer}>
        {/* Own Video */}
        {stream && (

          <Paper classsName={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
              <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
        {/* Users Video */}
        {
          callAccepeted && !callEnded && (
            <Paper classsName={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
              <video playsInline ref={userVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>

          )
        }

      </Grid>
    </div>
  )
}

export default VideoPlayer