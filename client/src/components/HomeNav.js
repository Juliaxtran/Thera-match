import UserContext from "./AppContext"
import { useContext } from "react"

const HomeNav = ({ success, setShowModal, showModal, setIsSignUp }) => {

  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  }

  const { user } = useContext(UserContext);


  return (

      <div className="home-nav">
        <div className="logo-container">
          <img className="logo" src={`/images/other/logo.png`} alt="logo" />

          <h1 className="title"> Thera-Match</h1>
        </div>

        {/* Another button here that links to the therapist home page  */}

        {user.id && <button className='secondary-button'
        >Logout </button>}


        {!user.id && <button className='secondary-button'
          onClick={handleClick}
          disabled={showModal}
        > Login </button>}
      </div>

  )
}

export default HomeNav