import '../App.css';
import { NavBar } from './Navbar';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();

  return (

    <div className="App">
      <NavBar/>
      <h2>Hello and welcome to the home</h2>
    </div>
  );
}

export default App;
