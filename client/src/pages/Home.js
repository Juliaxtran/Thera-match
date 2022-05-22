import HomeNav from "../components/HomeNav";
import AuthModal from "../components/AuthModal"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../Home.css';


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true)

  const success = false;

  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(true)
  }

const navigate = useNavigate();

const therapistLogin = () => {
  navigate ('/therapist')
}

  return (
    <div className="overlay">
      <HomeNav
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp} />

      <div className="auth-container">
        <h1 >Finding a therapist can be hard ...</h1>
        <h3>We make it easy. Swipe to match with a health professional today.</h3>
        <div className="home-button-container">
        <button className='primary-button' onClick={handleClick}>
          {success ? 'Sign Out' : 'Create Account'}
        </button>
        <button className='primary-button' onClick={therapistLogin}> For  Therapist </button>
        </div>
        {showModal && (
          <AuthModal
            setShowModal={setShowModal}
            isSignUp={isSignUp} />
        )}
    </div>
    </div>
  )
}

export default Home