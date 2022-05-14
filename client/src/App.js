
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Profile from './pages/Profile';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element = {<Home />}/>
      <Route path={"/dashboard"} element = {<Dashboard />} />
      <Route path={"/profile"} element = {<Profile />} />

  </Routes>
  </BrowserRouter>
  );
}

export default App;
