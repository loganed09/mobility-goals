import React, { useState } from 'react';
import './NavBar.css';


export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
  
    const handleToggle = () => {
      setNavbarOpen(!navbarOpen);
    };

    let iconImage = require("../../resources/images/mobilityGoals.jpg");
  
    return (
      <nav className="navbar">
          <div className="desktopNav"> 
            <p className={`logo ${navbarOpen ? " hideLogo" : ""}`}>
                <a href="home"><img className="iconImage" src={iconImage.default} alt="iconImg" /></a>
            </p>
            <div className="navItems">
              {/* <a className="navItem nitem1" href="#schedule">Schedule</a> */}
              <a className="navItem nitem2" href="#team">Team Members</a>
              <a className="navItem nitem3" href="#services">Services</a>
              <a className="navItem nitem4" href="#contact">Contact</a>
              <a className="navItem nitem5" href="#testimonials">Testimonials</a>
            </div>
          </div>
          <div className="dropdown">
            <p className={`logo ${navbarOpen ? " hideLogo" : ""}`}>
                <a href="home"><img className="iconImage" src={iconImage.default} alt="iconImg" /></a>
            </p>
            <button className="mobile-id" onClick={handleToggle}>
                <i className={`${navbarOpen ? "cross fas fa-times" : "hamburger fas fa-bars"}`}></i>
            </button>
            <ul className={`dropdown-content ${navbarOpen ? " showMenu" : ""}`} onClick={handleToggle}>
              {/* <a href="#schedule">Schedule</a> */}
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
              <a href="#team">Team Members</a>
              <a href="#testimonials">Testimonials</a>
            </ul>
          </div>
      </nav>
      )
  }