import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { HiAnnotation } from "react-icons/hi";




const MatchContainer = ({setTherapistId}) => {

  let [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/matches/show', { withCredentials: true }).then(res => {
      let matches = res.data;
      console.log(matches);
      setMatches(matches);
    })
  }, [])



  return (
    <div className="match-container">
      <h2>Favourites</h2>
      <hr></hr>

     {matches.map((match) => (
      <div className="matchList" key={match.therapist_id}>
     <Stack direction="column" spacing={2} >
      <Avatar key={match.therapist_id} src= {match.image} className ='match-avatar' />
      </Stack>
      <h4 key={match.therapist_id}> {match.therapist_name} </h4>
      <button onClick={() => setTherapistId(match.therapist_id)} >< HiAnnotation className= "match-icon"/> </button>

      </div>
    ))}

    </div>
  )
}

export default MatchContainer