import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Hospital, User, Briefcase } from 'lucide-react';
import '../Styles/Homecontent.css';
import Herosection from './Herosection';


function Homecontent() {
  const services = [
    {
      id: 'cardiology',
      title: 'Cardiology',
      icon: <Heart className="icon" />,
      description: 'Expert care for heart conditions with state-of-the-art diagnostic and treatment services.',
    },
    {
      id: 'orthopedics',
      title: 'Orthopedics',
      icon: <Briefcase className="icon" />,
      description: 'Specialized care for bones, joints, and muscles with advanced surgical and therapeutic options.',
    },
    {
      id: 'pediatrics',
      title: 'Pediatrics',
      icon: <User className="icon" />,
      description: 'Compassionate healthcare for children of all ages, from newborns to adolescents.',
    },
    {
      id: 'general-surgery',
      title: 'General Surgery',
      icon: <Hospital className="icon" />,
      description: 'Comprehensive surgical services for a wide range of conditions and procedures.',
    },
    {
      id: 'dermatology',
      title: 'Dermatology',
      icon: <Shield className="icon" />,
      description: 'Expert care for skin conditions, cosmetic concerns, and dermatological health.',
    },
  ];

  return (
    <>
    <Herosection/>
      <section className="intro-section">
        <div className="container intro-content">
          <div className="intro-text">
            <h2 className="section-title">Your Health is Our Priority</h2>
            <p className="section-subtitle">About Harmony Care Hospital</p>

            <p>
              Since 2005, Harmony Care Hospital has been dedicated to providing exceptional healthcare services
              with compassion and integrity. Our mission is to improve the health and wellbeing of the communities
              we serve through excellence in care, education, and research.
            </p>
            <p>
              With a team of highly skilled medical professionals and state-of-the-art facilities,
              we offer comprehensive healthcare services to meet the needs of our patients at every stage of life.
            </p>
            <Link to="/about">
              <button className='about-btn'>Learn More About Us</button>
            </Link>
          </div>
          <div className="intro-image">
            <img
              src="https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=1472&auto=format&fit=crop"
              alt="Hospital Building"
            />
          </div>
        </div>
      </section>
      <section className="services-section" id="services">
  <div className="container">
    <div className="text-center">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">Comprehensive Healthcare Solutions</p>
    </div>

    <div className="services-grid">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <div className="icon-container">{service.icon}</div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>

    <div className="view-btn">
      <Link to="/services">
        <button className="cta-button">View All Services</button>
      </Link>
    </div>
  </div>
</section>

      <section className="cta-section">
        <div className="container text-center">
          <h2>Need Medical Assistance?</h2>
          <p>
            Schedule an appointment with our specialists today and take the first step towards better health.
          </p>
          <Link to="/appointments">
            <button className="cta-button">Book an Appointment Now</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Homecontent;
