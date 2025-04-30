import React from 'react'
import '../Styles/Servicepage.css'
import { Briefcase, Heart, Hospital, Shield, User } from 'lucide-react';
function Servicepage() {

    const services = [
        {
          id: 'cardiology',
          title: 'Cardiology',
          icon: <Heart/>,
          description: [
            "Our cardiology department offers comprehensive care for heart and vascular conditions, combining advanced technology with expert clinical care.",
            "Services include diagnostic tests like ECGs and stress tests, interventional cardiology procedures, cardiac rehabilitation, and preventive care.",
            "Our team of board-certified cardiologists and specialized nurses work together to provide personalized treatment plans for each patient."
          ]
        },
        {
          id: 'orthopedics',
          title: 'Orthopedics',
          icon:<Briefcase/>,
          description: [
            "The orthopedics department specializes in the diagnosis, treatment, and prevention of conditions affecting the musculoskeletal system.",
            "We offer comprehensive care for joint replacements, sports medicine, spine surgery, fracture care, and rehabilitation services.",
            "Our orthopedic surgeons utilize minimally invasive techniques whenever possible to reduce recovery time and improve outcomes."
          ]
        },
        {
          id: 'pediatrics',
          title: 'Pediatrics',
          icon:<User/>,
          description: [
            "Our pediatric department provides compassionate and comprehensive healthcare for children from birth through adolescence.",
            "Services include well-child visits, immunizations, treatment of acute and chronic illnesses, developmental assessments, and specialized care for complex conditions.",
            "Our child-friendly environment and specially trained staff ensure that young patients receive the best possible care in a comfortable setting."
          ]
        },
        {
          id: 'general-surgery',
          title: 'General Surgery',
          icon: <Hospital/>,
          description: [
            "The general surgery department performs a wide range of procedures to treat various conditions affecting the abdomen, digestive system, endocrine system, and more.",
            "Our surgeons are skilled in both traditional and minimally invasive techniques, including laparoscopic and robotic-assisted surgery.",
            "We provide pre-operative consultation, surgical intervention, and post-operative care to ensure the best possible outcomes for our patients."
          ]
        },
        {
          id: 'dermatology',
          title: 'Dermatology',
          icon: <Shield/>,
          description: [
            "Our dermatology department offers comprehensive care for conditions affecting the skin, hair, and nails for patients of all ages.",
            "Services include medical dermatology for conditions like acne, eczema, and psoriasis; surgical dermatology for skin cancer treatment; and cosmetic procedures.",
            "Our dermatologists use advanced diagnostic techniques and treatments to address both common and complex dermatological concerns."
          ]
        }
      ];
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">Comprehensive healthcare services tailored to your needs</p>
        </div>

        {services.map((service, index) => (
          <div key={service.id} className={`service-block ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="service-icon-container">
              <div className="service-icon">{service.icon}</div>
            </div>
            <div className="service-content">
              <h2 className="service-title">{service.title}</h2>
              {service.description.map((text, i) => (
                <p key={i} className="service-text">{text}</p>
              ))}
            </div>
            {index < services.length - 1 && <hr className="service-separator" />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Servicepage
