import {Grid, Typography, Paper} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';
import classNames from 'classnames';

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
  const classes = useStyles();
  return (
  <div>
  <Grid container className={classes.gridContainer}>

  </Grid>
  </div>
  )
  }

  export default VideoPlayer