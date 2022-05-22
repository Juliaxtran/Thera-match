import React, { useState, useMemo, useRef, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import '../Dashboard.css';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import axios from 'axios';
import FilterTable from '../components/FilterTable';
import FilterTableByGender from "../components/FilterTableByGender";
import FilterTableBySession from "../components/FilterTableBySession";
import FilterPrice from "../components/FilterPrice";
import HomeNav from '../components/HomeNav';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { IconButton } from '@mui/material';



function Dashboard() {

  const [lastDirection, setLastDirection] = useState();
  const [therapists, setTherapists] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(therapists.length - 1);
  const [specialties, setSpecialties] = useState([]);
  const [gender, setGender] = useState([]);
  const [session, setSession] = useState([]);
  const [maximum, setMaximum] = useState('');
  const [minimum, setMinimum] = useState('');

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => {
    axios.get('/therapists/specialties', { params: { specialties, gender, session, minimum, maximum } })
      .then(res => {
        const therapists = res.data;
        setCurrentIndex(therapists.length - 1)
        setTherapists(therapists)
      })
  }, [specialties, gender, session, minimum, maximum])


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
    // console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
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

    axios.post('/matches/add', { therapist_id }, { withCredentials: true })
      .then(() => console.log("it worked"))
      .catch((e) => console.log(e));
  }

  return (
    <>
      <HomeNav />
      <div className='main-dashboard'>
        <div className='filter-tables'>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className='filter-icon-button'>
                <IconButton>
                  <FilterAltIcon />
                </IconButton>
              </div>
              <h4>Filter by Specialties</h4>
            </AccordionSummary>
            <FilterTable
              setSpecialties={setSpecialties}
            />
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className='filter-icon-button'>
                <IconButton>
                  <FilterAltIcon />
                </IconButton>
              </div>
              <h4>Filter by Gender</h4>
            </AccordionSummary>
            <FilterTableByGender
              setGender={setGender}
            />
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className='filter-icon-button'>
                <IconButton>
                  <FilterAltIcon />
                </IconButton>
              </div>
              <h4>Filter by Session Type</h4>
            </AccordionSummary>
            <FilterTableBySession
              setSession={setSession}
            />
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className='filter-icon-button'>
                <IconButton>
                  <FilterAltIcon />
                </IconButton>
              </div>
              <h4>Filter by Session Cost</h4>
            </AccordionSummary>
            <FilterPrice
              setMaximum={setMaximum}
              setMinimum={setMinimum}
            />
          </Accordion>
        </div>
        <div>

          <h1>Match with a Health Professional</h1>


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
                        className='card' >
                        <h3>{therapist.first_name} {therapist.last_name}</h3>
                      </div>
                      <Typography component={'span'} variant="body2" color="text.secondary" sx={{ width: 500, paddingLeft: 5, paddingRight: 5, color: 'black' }} fontSize='16px'>
                        <h1>{therapist.first_name} {therapist.last_name}</h1>
                        <h2>{therapist.title}</h2>
                        <hr />
                        <h3>Location: {therapist.location}</h3>
                        <h3>Session: {therapist.session_type}</h3>

                        <h3>Cost per session: ${therapist.cost_per_session} </h3>
                        <h3>Specialties: {therapist.type}</h3>
                        <hr />
                        <h3>About: {therapist.about}</h3>
                      </Typography>
                    </CardContent>
                  </Card>
                </TinderCard>
              </div>
            ))
            }
          </div >
          <div className='dashboard-buttons'>
            <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>No thanks!</button>
            <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
            <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>I wanna book you!</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default Dashboard;