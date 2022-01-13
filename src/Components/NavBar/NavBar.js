import React, { useState } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";
  import { NavLink } from 'react-router-dom';


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
                <NavLink to="/mobility-goals"><img className="iconImage" src={iconImage.default} alt="iconImg" /></NavLink>
            </p>
            <a className="appointmentBook" href="https://square.site/book/6GW4DVDWNC8ZY/mobility-goals-columbus-oh" target="_blank">Book an Appointment</a>
            <div className="navItems">
              {/* <a className="navItem nitem1" href="#home">Home</a>
              <a className="navItem nitem2" href="#about">About</a>
              <a className="navItem nitem3" href="#services">Services</a>
              <a className="navItem nitem4" href="#contact">Contact</a>
              <a className="navItem nitem5" href="#testimonials">Testimonials</a>
              <a className="navItem nitem6" href="https://www.instagram.com/mobilitygoals/">
                <FontAwesomeIcon icon={faInstagram} />
              </a> */}

              <NavLink className="navItem nitem1" to='/mobility-goals'>Home</NavLink>
              <NavLink className="navItem nitem2" to='/about'>Team</NavLink>
              <NavLink className="navItem nitem3" to='/services'>Services</NavLink>
              {/* <NavLink className="navItem nitem4" to='/contact'>Contact</NavLink> */}
              <a className="navItem nitem4" href="#contact">Contact</a>
              <a className="navItem nitem5" href="https://www.instagram.com/mobilitygoals/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
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
              <a href="#team">About</a>
              <a href="#testimonials">Testimonials</a>
            </ul>
          </div>
      </nav>
      )
  }