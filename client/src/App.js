import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect} from 'react';


function App() {

  useEffect(() => {
    axios.get('http://localhost:9000/users').then(res => {
      console.log(res)
    })
  }, [])


  return (
    <div className="App">
    

    </div>
  );
}

export default App;
