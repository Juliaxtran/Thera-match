import React, { useState, useMemo, useRef, useEffect } from 'react';
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';
import '../Dashboard.css';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import axios from 'axios';

// const db = [
//   {
//     name: 'Richard Hendricks',
//     url: '/images/users/1.jpeg',
//     about: 'Psychotherapy is my second career and my calling. My approach is collaborative, compassionate, and committed. I utilize ideas and techniques from a wide range of counselling models, which allows for flexibility and enables us to adapt to your personal needs as progress is made and those needs change.',
//     location: '156 Sheppard Avenue West Toronto, ON M2N',
//     session_type: 'Online & In-person',
//     title: 'Registered Social Worker, MSW, RSW, LCSW',
//     cost_per_session: 50,
//     type: 'Addiction'
//   },
//   {
//     name: 'Erlich Bachman',
//     url: '/images/users/2.jpeg',
//     about: 'Psychotherapy is my second career and my calling. My approach is collaborative, compassionate, and committed. I utilize ideas and techniques from a wide range of counselling models, which allows for flexibility and enables us to adapt to your personal needs as progress is made and those needs change.',
//     location: '156 Sheppard Avenue West Toronto, ON M2N',
//     session_type: 'Online & In-person',
//     title: 'Registered Social Worker, MSW, RSW, LCSW',
//     cost_per_session: 50,
//     type: 'Addiction'
//   },
//   {
//     name: 'Monica Hall',
//     url: '/images/users/3.jpeg',
//     about: 'Psychotherapy is my second career and my calling. My approach is collaborative, compassionate, and committed. I utilize ideas and techniques from a wide range of counselling models, which allows for flexibility and enables us to adapt to your personal needs as progress is made and those needs change.',
//     location: '156 Sheppard Avenue West Toronto, ON M2N',
//     session_type: 'Online & In-person',
//     title: 'Registered Social Worker, MSW, RSW, LCSW',
//     cost_per_session: 50,
//     type: 'Addiction'
//   },
//   {
//     name: 'Jared Dunn',
//     url: '/images/users/4.jpeg',
//     about: 'Psychotherapy is my second career and my calling. My approach is collaborative, compassionate, and committed. I utilize ideas and techniques from a wide range of counselling models, which allows for flexibility and enables us to adapt to your personal needs as progress is made and those needs change.',
//     location: '156 Sheppard Avenue West Toronto, ON M2N',
//     session_type: 'Online & In-person',
//     title: 'Registered Social Worker, MSW, RSW, LCSW',
//     cost_per_session: 50,
//     type: 'Addiction'
//   },
//   {
//     name: 'Dinesh Chugtai',
//     url: '/images/users/5.jpeg',
//     about: 'Psychotherapy is my second career and my calling. My approach is collaborative, compassionate, and committed. I utilize ideas and techniques from a wide range of counselling models, which allows for flexibility and enables us to adapt to your personal needs as progress is made and those needs change.',
//     location: '156 Sheppard Avenue West Toronto, ON M2N',
//     session_type: 'Online & In-person',
//     title: 'Registered Social Worker, MSW, RSW, LCSW',
//     cost_per_session: 50,
//     type: 'Addiction'
//   }
// ]

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

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }


  const outOfFrame = (name, idx) => {

    /// Pat's Note: name is undefined
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < therapists.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className='main-dashboard'>
      <link href='https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500&display=swap'
        rel='stylesheet' />
      <div className='dashboard'>
        {/* <link
          href='https://fonts.googleapis.com/css?family=Damion&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
          rel='stylesheet'
        /> */}
        <link href='https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500&display=swap'
          rel='stylesheet' />
        <h1>Match with a Therapist</h1>
        <div className='cardContainer'>
          {therapists.map((character, index) => (
            <div className='TinderCard' key={character.id}>
              <TinderCard
                ref={childRefs[index]}
                className='swipe'
                key={character.id}
                onSwipe={(dir) => swiped(dir, character.first_name, index)}
                onCardLeftScreen={() => outOfFrame(character.first_name, index)}
              >

                <Card>

                  <CardContent sx={{ display: 'flex', padding: 0, '&:last-child': { pb: 0 } }}>
                    <div
                      style={{ backgroundImage: 'url(' + character.image + ')' }}
                      className='card'
                    >
                      <h3>{character.first_name} {character.last_name}</h3>

                    </div>

                    <Typography component={'span'} variant="body2" color="text.secondary" sx={{ width: 300, paddingLeft: 5, paddingRight: 5 }} fontSize='10px'>

                      <h3>About: {character.about}</h3>
                      <h3>Location: {character.location}</h3>
                      <h3>Session: {character.session_type}</h3>
                      <h3>Title: {character.title}</h3>
                      <h3>Cost per session: {character.cost_per_session}</h3>
                      <h3>Specialties: {character.type}</h3>
                    </Typography>
                  </CardContent>
                </Card>
              </TinderCard>
            </div>
          ))
          }
        </div >
        <div className='buttons'>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>No thanks!</button>
          {/* <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button> */}
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>I wanna book you!</button>
        </div>
        {/* {
        lastDirection ? (
          <h2 key={lastDirection} className='infoText'>
            You swiped {lastDirection}
          </h2>
        ) : (
          <h2 className='infoText'>
            Swipe a card or press a button to get Restore Card button visible!
          </h2>
        )
      } */}
      </div >
    </div>
  )
}

export default Advanced;