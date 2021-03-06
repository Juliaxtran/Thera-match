import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import UserContext from "./AppContext";
import { useContext } from "react";

const AuthModal = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext)

  let navigate = useNavigate()

  const handleClick = () => {
    setShowModal(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (isSignUp && (password !== confirmPassword)) {
        setError('Passwords need to match!')
        return
      }
      // If response is success navigate to onboarding - navidat a part of router dom
      const response = await axios.post(`/users/${isSignUp ? 'signup' : 'login'}`, { email, password }, { withCredentials: true })
      if (response.data.user) {
        setUser(response.data.user)
      }
      const success = response.status === 200
      if (isSignUp && success && response.data.user.type === null) navigate('/profile')
      if (!isSignUp && success && response.data.user.type === 'therapist') navigate('/therapist-dashboard')
      if (!isSignUp && success && response.data.user.type === 'user') navigate('/dashboard')
    } catch (error) {
      setError("Email / Password invalid")
    }
  }

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>x</div>
      <h2>{isSignUp ? 'Create Account' : 'Login In'}</h2>
      <p>By clicking LogIn, you agree to our terms. Learn how we process your data in our Privacy Policy </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)} />
        {isSignUp && (<input
          type="password"
          id="password-check"
          name="password-check"
          placeholder="confirm password"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)} />)}

        <input className="secondary-button" type="submit" />
        <p>{error}</p>
        <hr />
        <p>We are happy that you are.</p>


      </form>

    </div>
  )
}

export default AuthModal;