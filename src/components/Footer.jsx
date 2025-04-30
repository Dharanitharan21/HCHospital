import React from 'react'
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import '../Styles/Footer.css'
function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-grid">
        <div>
          <h3 className="footer-logo">
            Harmony<span className="text-hospital-lightblue">Care</span>
          </h3>
          <p className="footer-description">
            Providing exceptional healthcare services with compassion and expertise since 2005.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
            <li><Link to="/doctors" className="footer-link">Doctors</Link></li>
            <li><Link to="/appointments" className="footer-link">Appointments</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Services</h3>
          <ul className="footer-list">
            <li><Link to="/services#cardiology" className="footer-link">Cardiology</Link></li>
            <li><Link to="/services#orthopedics" className="footer-link">Orthopedics</Link></li>
            <li><Link to="/services#pediatrics" className="footer-link">Pediatrics</Link></li>
            <li><Link to="/services#general-surgery" className="footer-link">General Surgery</Link></li>
            <li><Link to="/services#dermatology" className="footer-link">Dermatology</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Contact Information</h3>
          <ul className="footer-contact">
            <li className="footer-contact-item">
              <MapPin className="footer-icon" />
              <span>123 Healthcare Avenue<br />Medical District, City 12345</span>
            </li>
            <li className="footer-contact-item">
              <Phone className="footer-icon" />
              <span>(123) 456-7890</span>
            </li>
            <li className="footer-contact-item">
              <Mail className="footer-icon" />
              <span>info@harmonycare.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Harmony Care Hospital. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
