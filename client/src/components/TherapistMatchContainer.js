import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';
import Divider from '@mui/material/Divider';
import { HiAnnotation } from "react-icons/hi";

const TherapistMatchContainer = ({setRecipient}) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get('/matches/therapists', { withCredentials: true }).then(res => {
      let matches = res.data;
      console.log(matches);
      setMatches(matches);
    })
  }, [])


  return (
    <div className="therapist-matches">
      <h2>People who favourited you..</h2>

      {matches.map((match) =>
        (  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
          <ListItem alignItems='flex-start'>
          <ListItemAvatar>
          <Avatar  src={match.image} />
        </ListItemAvatar>
        <ListItemText
          primary=  {match.user_name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline', size: 30 }}
                component="span"
                color="text.primary"
                fontSize='20px'
              >

              </Typography>
              {match.about}
            </React.Fragment>


          }
        />
         <button onClick={() => setRecipient(match)} >< HiAnnotation className= "match-icon"/> </button>
          </ListItem>

          <Divider variant="inset" component="li" />
        </List>)
      )}

    </div>

  )
}

export default TherapistMatchContainer