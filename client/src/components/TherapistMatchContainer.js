import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";

const TherapistMatchContainer = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get('/matches/therapists', { withCredentials: true }).then(res => {
      let matches = res.data;
      console.log(matches);
      setMatches(matches);
    })
  }, [])

  return (
    <div>

      {matches.map((match) => (
        <li>match.user_name</li>
      )}
    </div>

  )
}

export default TherapistMatchContainer