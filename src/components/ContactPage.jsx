import React, { useState } from 'react'
import '../Styles/ContactPage.css'
import Swal from 'sweetalert2';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      setTimeout(() => {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for contacting us.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setIsSubmitting(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, 1500);
    };
  return (
    <div className="contact-container">
    <div className="page-banner">
      <h1>Contact Us</h1>
      <p>Get in touch with our team for any inquiries or assistance</p>
    </div>

    <div className="contact-grid">
      <div className="contact-details">
        <h2>We're here to help</h2>
        <p className="contact-subtitle">Reach out via phone, email or visit us in person.</p>

        <div className="info-box">
          <h3>Visit Us</h3>
          <p>V.M.Towers Selvakumarasamy Gardens,Theivanayagi Nagar, Ganapathy, Coimbatore, Tamil Nadu 641006</p>
        </div>

        <div className="info-box">
          <h3>Call Us</h3>
          <p>Main: (123) 456-7890<br />Appointments: (123) 456-7891</p>
        </div>

        <div className="info-box">
          <h3>Email Us</h3>
          <p>info@harmonycare.com<br />care@harmonycare.com</p>
        </div>

        <div className="info-box">
          <h3>Hours of Operation</h3>
          <p>Mon–Fri: 8:00 AM – 8:00 PM<br />Sat: 9:00 AM – 5:00 PM<br />Sun: 10:00 AM – 3:00 PM</p>
          <small>Emergency services available 24/7</small>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.166745648525!2d76.96321584854405!3d11.03549932606944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8586c00000039%3A0x1ab03c2cb32ea857!2sNvron%20Life%20Science%20Ltd!5e0!3m2!1sen!2sin!4v1746039454754!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Hospital Location"
            allowFullScreen={false}
          ></iframe>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
        <p className="contact-subtitle">We'll respond as soon as we can.</p>
          <label>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label>Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject"
            required
          />

          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows="5"
            required
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="feedback-box">
          <h3>Patient Feedback</h3>
          <p>We value your feedback. Let us know about your experience.</p>
          <button className="feedback-button">Share Your Feedback</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactPage
