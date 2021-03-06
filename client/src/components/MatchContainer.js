import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { HiAnnotation } from "react-icons/hi";




const MatchContainer = ({setRecipient}) => {

  let [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get('/matches/show', { withCredentials: true }).then(res => {
      let matches = res.data;
      setMatches(matches);
    })
  }, [])



  return (
    <div className="match-container">
      <h2>Favourites</h2>
      <hr></hr>

     {matches.map((match) => (
      <div className="matchList" key={match.recipient_id}>
     <Stack direction="column" spacing={2} >
      <Avatar key={match.recipient_id} src= {match.image} className ='match-avatar' />
      </Stack>
      <h4 key={match.recipient_id}> {match.therapist_name} </h4>
      <button onClick={() => setRecipient(match)} >< HiAnnotation className= "match-icon"/> </button>
      </div>
    ))}

    </div>
  )
}

export default MatchContainer