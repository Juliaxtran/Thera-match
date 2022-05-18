
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messages from './pages/Messages';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element = {<Home />}/>
      <Route path={"/dashboard"} element = {<Dashboard />} />
      <Route path={"/profile"} element = {<Profile />} />
      <Route path={"/messages"} element = {<Messages />} />

  </Routes>
  </BrowserRouter>
  );
}

export default App;

