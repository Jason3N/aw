import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import Movie from './components/moviecontainer.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Movie/>
    </div>
  );
}

export default App;
