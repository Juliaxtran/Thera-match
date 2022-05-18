
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import TherapistsHome from './pages/TherapistsHome';
import TherapistProfile from './pages/TherapistProfile';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './components/AppContext';


function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState("")

useEffect(() => {
setLoading(true)
axios.get('/api/profile', { withCredentials: true })
.then((res) => {
  setLoading(false);
  setUser(res.data);
})
.catch(() => {
  setLoading(false);
})
},[user.id])


  return (
    <UserContext.Provider value = {{user, loading, setUser}}>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element = {<Home />} />
      <Route path={"/dashboard"} element = {<Dashboard />} />
      <Route path={"/profile"} element = {<Profile />} />
      <Route path={"/therapist-profile"} element = {<TherapistProfile />} />
      <Route path={"/messages"} element = {<Messages />} />
      <Route path={"/therapist"} element = {<TherapistsHome />} />
  </Routes>
  </BrowserRouter>
  </UserContext.Provider>
  );
}

export default App;

