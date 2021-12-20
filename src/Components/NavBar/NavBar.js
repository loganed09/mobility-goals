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
          <p className={`logo ${navbarOpen ? " hideLogo" : ""}`}>
              <a href="home"><img className="iconImage" src={iconImage.default} alt="iconImg" /></a>
          </p>
          <div className="navItems">
            <a className="navItem nitem1" href="#projects">Schedule</a>
            <a className="navItem nitem2" href="#team">Team Members</a>
            <a className="navItem nitem3" href="#contact">Contact</a>
            <a className="navItem nitem4" href="#testimonials">Testimonials</a>
          </div>
          <div className="dropdown">
            <button className="mobile-id" onClick={handleToggle}>
                <i className={`${navbarOpen ? "cross fas fa-times" : "hamburger fas fa-bars"}`}></i>
            </button>
            <ul className={`dropdown-content ${navbarOpen ? " showMenu" : ""}`} onClick={handleToggle}>
              <a href="#schedule">Schedule</a>
              <a href="#contact">Contact</a>
              <a href="#team">Team Members</a>
              <a href="#testimonials">Testimonials</a>
            </ul>
          </div>
      </nav>
      )
  }