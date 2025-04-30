import React from 'react';
import '../Styles/Aboutpage.css';

function Aboutpage() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Our History */}
        <div className="about-grid mb-16">
          <div>
            <div className="about-heading">
            <h2 className="title">Our History</h2>
              <h3 className="subtitle">Serving our community since 2005</h3>
            </div>
            <p className="about-text">
              Harmony Care Hospital was founded in 2005 with a clear vision: to provide accessible, high-quality healthcare
              to our community. What began as a small clinic has grown into a comprehensive medical center serving thousands each year.
            </p>
            <p className="about-text">
              We've stayed true to our founding principles of compassionate care, medical excellence, and community service—expanding
              our services to meet evolving healthcare needs.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1528&auto=format&fit=crop"
              alt="Hospital History"
              className="about-image"
            />
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="mb-16">
          <div className="about-heading center">
            <h3 className="subtitle">Our Mission and Vision</h3>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3 className="card-title mission">Our Mission</h3>
              <p className="about-text">
                To enhance the health and well-being of our community through compassionate care, medical excellence, and
                accessible services. We focus on patient-centered care that supports both physical and emotional health.
              </p>
            </div>
            <div className="about-card">
              <h3 className="card-title vision">Our Vision</h3>
              <p className="about-text">
                To be the region’s premier healthcare provider—known for exceptional care, innovation, and community
                partnerships. We aim to lead in healthcare delivery and outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Accreditation and Recognition */}
        <div>
          <div className="about-heading center">
            <h3 className="subtitle">Accreditation and Recognition</h3>
          </div>
          <div className="about-card">
            <p className="about-text mb-4">
              Harmony Care Hospital maintains the highest standards, recognized by numerous accrediting organizations. Our
              quality and safety is reflected in the following recognitions:
            </p>
            <ul className="about-list">
              <li>
                <strong>Joint Commission Accreditation</strong> - Recognizing our commitment to quality and safety.
              </li>
              <li>
                <strong>Center of Excellence in Cardiac Care</strong> - Awarded for heart health services and outcomes.
              </li>
              <li>
                <strong>Patient Safety Star Rating</strong> - Achieving top ratings for safety protocols.
              </li>
              <li>
                <strong>Healthcare Equality Index Leader</strong> - Recognized for equitable and inclusive care.
              </li>
            </ul>
            <p className="about-text">
              These honors reflect our dedication to delivering the best care and continuously improving patient outcomes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Aboutpage;
