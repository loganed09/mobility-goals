import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Schedule from './Components/Schedule/Schedule';

function App() {
  return (
    <body>
      <header>
        <NavBar />
      </header>
      <Schedule />
    </body>
  );
}

export default App;
