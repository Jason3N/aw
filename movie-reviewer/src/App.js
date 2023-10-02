import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import Movie from './components/moviecontainer.js'

function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
      </div>
      <div style ={{marginTop: '50px'}}>
      <Movie/>
      </div>
    </div>
  );
}

export default App;
