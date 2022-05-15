

const HomeNav = ({ success, setShowModal, showModal, setIsSignUp }) => {

  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  }


  return (
    <nav>
      <div className="home-nav">
        <div className="logo-container">
          <img className="logo" src={`/images/other/logo.png`} alt="logo" />

          <h1 className="title"> Thera-Match</h1>
        </div>
        {!success && <button className='secondary-button'
          onClick={handleClick}
          disabled={showModal}
        >Login </button>}
      </div>
    </nav>
  )
}

export default HomeNav