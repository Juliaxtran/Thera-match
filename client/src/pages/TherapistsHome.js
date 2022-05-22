import HomeNav from "../components/HomeNav";
import AuthModal from "../components/AuthModal";
import { useState } from 'react'
import '../stylesheet/Therapist.css';


const TherapistsHome = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true)

  const success = false;

  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(true)
  }

  return (
    <div className="therapist-overlay">
      <HomeNav
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp} />

      <div className="auth-container">
        <h1 >Connect with clients now</h1>
        <h3>We make it easy. Meet you matches today and continue to do what you do best. <br></br>Change lives for the better.</h3>
        <button className='primary-button' onClick={handleClick}>
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

export default TherapistsHome