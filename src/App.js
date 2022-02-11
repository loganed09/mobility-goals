import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Schedule from './Components/Schedule/Schedule';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Classes from './Components/Classes/Classes';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
          <Routes>
            <Route exact path="/mobility-goals"  activeClassName="current" element={<Home/>} />
            <Route path="/about" activeClassName="current" element={<About/>} />
            <Route path="/services" activeClassName="current" element={<Services/>} />
            <Route path="/classes" activeClassName="current" element={<Classes/>} />
            <Route path="/contact" activeClassName="current"  element={<Contact/>} />
          </Routes>
          <Contact />
        <Footer/>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
