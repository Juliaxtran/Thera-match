import HomeNav from "../components/HomeNav";
import AuthModal from "../components/AuthModal";
import { useState } from 'react'


const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  const[isSignUp, setIsSignUp] = useState(true)

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
        setIsSignUp={setIsSignUp}/>
    <h1>Home Page</h1>
    <button class='primary-button' onClick={handleClick}>
      {success ? 'Sign Out' : 'Create Account'}
      </button>
    {showModal && (
  <AuthModal
  setShowModal={setShowModal}
   isSignUp={isSignUp} />
)}
  </div>
  )
  }

  export default Home