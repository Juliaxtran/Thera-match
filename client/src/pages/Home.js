import HomeNav from "../components/HomeNav";
import AuthModal from "../components/AuthModal";
import { useState } from 'react'


const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true)

  const success = false;

  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(true)
  }

  return (
    <div>
      <HomeNav
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp} />
      <div class="home" authToken={success}>
        <h1>Matching with a therapist can be hard ...</h1>
        <h3>We make it easy. Swipe to match with a health professional today</h3>
        <button class='primary-button' onClick={handleClick}>
          {success ? 'Sign Out' : 'Create Account'}
        </button>
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