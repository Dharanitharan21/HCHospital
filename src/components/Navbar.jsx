import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../Styles/Navbar.css'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
  
    const navigation = [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Doctors', href: '/doctors' },
      { name: 'Appointments', href: '/appointments' },
      { name: 'Contact', href: '/contact' },
    ];
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };


  return (
    <header className="navbar-header">
    <div className="page-container">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span className="logo-text">Harmony<span className="logo-highlight">Care</span></span>
        </Link>
        <nav className="nav-links">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-item ${location.pathname === item.href ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="appointment-button">
          <Link to="/appointments">
            <button className="book-btn">Book Appointment</button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>
      </div>
    </div>

    {/* Mobile nav */}
    {isMenuOpen && (
      <div className="mobile-nav">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`mobile-nav-item ${location.pathname === item.href ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <Link to="/appointments" onClick={() => setIsMenuOpen(false)}>
          <button className="mobile-book-btn">Book Appointment</button>
        </Link>
      </div>
    )}
  </header>
  )
}
export default Navbar
