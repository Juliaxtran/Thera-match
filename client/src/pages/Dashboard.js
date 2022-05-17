import React, { useState, useMemo, useRef, useEffect } from 'react';
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';
import '../Dashboard.css';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import axios from 'axios';
import FilterTable from '../FilterTable';


function Advanced() {

  const [lastDirection, setLastDirection] = useState();
  const [therapists, setTherapists] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(therapists.length - 1);

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    axios.get('http://localhost:9000/therapists').then(res => {
      const therapists = res.data;
      setCurrentIndex(therapists.length - 1)
      setTherapists(therapists)
    })
  }, [])

  // Pat's Note: I added therapists as second dependecies not sure if it works
  const childRefs = useMemo(
    () =>
      Array(therapists.length)
        .fill(0)
        .map((i) => React.createRef()),
    [therapists]
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < therapists.length - 1

  const canSwipe = currentIndex >= 0;




  const outOfFrame = (name, idx) => {

    /// Pat's Note: name is undefined
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  // Card swipe with buttons // not working for matches how do i add other variables to it.
  const swipe = async (dir) => {
    if (canSwipe && currentIndex < therapists.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // actual swipe // working for matches
  // set last direction and decrease current index
  const swiped = (direction, id, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
    if (direction === 'right') {
      console.log(id)
      updateFavourites(id)
    }
  }

  const updateFavourites = (therapist_id) => {

    axios.post('http://localhost:9000/matches/add', { therapist_id }, { withCredentials: true })
      .then(() => console.log("it worked"))
      .catch((e) => console.log(e));
  }



  return (
    <div className='main-dashboard'>

      <div className='dashboard'>
        <FilterTable />
        <h1>Match with a Therapist</h1>
        <div className='cardContainer'>
          {therapists.map((therapist, index) => (
            <div className='TinderCard' key={therapist.id}>
              <TinderCard
                ref={childRefs[index]}
                className='swipe'
                key={therapist.id}
                onSwipe={(dir) => swiped(dir, therapist.id, index)}
                onCardLeftScreen={() => outOfFrame(therapist.first_name, index)}
              >

                <Card>

                  <CardContent sx={{ display: 'flex', padding: 0, '&:last-child': { pb: 0 } }}>
                    <div
                      style={{ backgroundImage: 'url(' + therapist.image + ')' }}
                      className='card'
                    >
                      <h3>{therapist.first_name} {therapist.last_name}</h3>

                    </div>

                    <Typography component={'span'} variant="body2" color="text.secondary" sx={{ width: 300, paddingLeft: 5, paddingRight: 5 }} fontSize='10px'>

                      <h3>About: {therapist.about}</h3>
                      <h3>Location: {therapist.location}</h3>
                      <h3>Session: {therapist.session_type}</h3>
                      <h3>Title: {therapist.title}</h3>
                      <h3>Cost per session: {therapist.cost_per_session}</h3>
                      <h3>Specialties: {therapist.type}</h3>
                    </Typography>
                  </CardContent>
                </Card>
              </TinderCard>
            </div>
          ))
          }









        </div >


        {/* (dir) => swiped(dir, therapist.id, index) */}

        <div className='buttons'>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>No thanks!</button>
          <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>I wanna book you!</button>
        </div>
      </div >
    </div>
  )
}

export default Advanced;