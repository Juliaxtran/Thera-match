import UserContext from "./AppContext"
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const HomeNav = ({ setShowModal, showModal, setIsSignUp }) => {

  let navigate = useNavigate()


  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  }

  const { user } = useContext(UserContext);

  const logOut =  (e) => {
    e.preventDefault()
    axios.post(`/users/logout`, { withCredentials: true }).then((response) => {

      const success = response.status === 200
      if(success) navigate('/');
    })

}


  return (

    <div className="home-nav">
      <div className="logo-container">
        <img className="logo" src={`/images/other/logo.png`} alt="logo" />

        <h1 className="title"> Thera-Match</h1>
      </div>

      {/* Another button here that links to the therapist home page  */}

      {user.id && <button className='secondary-button'
        onClick={logOut}>Logout </button>}


      {!user.id && (
        <div>

          <button className='secondary-button'
            onClick={handleClick}
            disabled={showModal}
          > Login </button>
     </div>
      )}
    </div>

  )
}

export default HomeNav