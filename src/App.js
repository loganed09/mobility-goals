import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Schedule from './Components/Schedule/Schedule';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
          <Routes>
            <Route exact path="/"  element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
