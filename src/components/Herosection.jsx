import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Herosection.css'

function Herosection() {
  return (
    <div className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to Harmony Care Hospital
        </h1>
        <p className="hero-description">
        Delivering compassionate care and exceptional medical services for a healthier community
        </p>
        <div className="hero-buttons">
          <Link to="/appointments">
            <button size="lg" className="book-appointment-button">
              Book an Appointment
            </button>
          </Link>
          <Link to="/services">
            <button variant="outline" size="lg" className="our-services-button">
              Our Services
            </button>
          </Link>
        </div>
      </div>
    </div>
    
  )
}

export default Herosection
