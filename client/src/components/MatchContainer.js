import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const MatchContainer = () => {
 let [matches, setMatches] = useState("");

  useEffect(() => {
    axios.get('http://localhost:9000/matches/show', {withCredentials: true}).then(res => {
      let matches  = res.data;
      setMatches(matches)
    })
  }, [])


  return (
  <div className = "match-container">

    {matches.map((match) => (
    <div className="MatchList">
      <Stack direction="column" spacing={2}>
      <li> {match.therapists_name}  </li>
      <Avatar key={match.therapists_name} src= {match.image} />
      </Stack>
      </div>
    ))}

  </div>
  )
  }

  export default MatchContainer