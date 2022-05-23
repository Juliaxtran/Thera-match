
import './stylesheet/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import TherapistsHome from './pages/TherapistsHome';
import TherapistProfile from './pages/TherapistProfile';
import Forum from './pages/Forum';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from './components/AppContext';
import TherapistDashboard from './pages/TherapistDashboard';
import VideoChat from './pages/VideoChat';
import { ContextProvider } from './components/SocketContext';


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
  }, [user.id])


  return (
    <UserContext.Provider value={{ user, loading, setUser }}>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/therapist-profile"} element={<TherapistProfile />} />
            <Route path={"/messages"} element={<Messages />} />
            <Route path={"/therapist"} element={<TherapistsHome />} />
            <Route path={"/therapist-dashboard"} element={<TherapistDashboard />} />
            <Route path={"/chat"} element={<VideoChat />} />
            <Route path={"/forum"} element={<Forum />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </UserContext.Provider>
  );
}

export default App;

