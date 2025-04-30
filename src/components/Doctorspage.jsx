import React from 'react'
import '../Styles/DoctorsPage.css';

const doctors = [
    {
      id: 'dr-emily-johnson',
      name: 'Dr. Emily Johnson',
      specialty: 'Cardiology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1470&auto=format&fit=crop',
      bio: 'Dr. Johnson specializes in interventional cardiology with over 15 years of experience. She completed her fellowship at Mayo Clinic and is board certified in cardiovascular disease.'
    },
    {
      id: 'dr-michael-patel',
      name: 'Dr. Michael Patel',
      specialty: 'Orthopedic Surgery',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop',
      bio: 'Dr. Patel is a fellowship-trained orthopedic surgeon specializing in sports medicine and joint replacement. He has worked with professional athletes and has published numerous research papers.'
    },
    {
      id: 'dr-sarah-martinez',
      name: 'Dr. Sarah Martinez',
      specialty: 'Pediatrics',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1470&auto=format&fit=crop',
      bio: 'Dr. Martinez has dedicated her career to children\'s health. With a warm approach and extensive training, she provides comprehensive care from newborns through adolescence.'
    },
    {
      id: 'dr-robert-wilson',
      name: 'Dr. Robert Wilson',
      specialty: 'General Surgery',
      image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=1374&auto=format&fit=crop',
      bio: 'Dr. Wilson specializes in minimally invasive surgical techniques. With over 20 years of experience, he is known for his precision and excellent patient outcomes.'
    },
    {
      id: 'dr-amina-khan',
      name: 'Dr. Amina Khan',
      specialty: 'Dermatology',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1470&auto=format&fit=crop',
      bio: 'Dr. Khan is a board-certified dermatologist specializing in medical and cosmetic dermatology. She completed her residency at University of California and has expertise in treating diverse skin types.'
    },
    {
      id: 'dr-james-thompson',
      name: 'Dr. James Thompson',
      specialty: 'Neurology',
      image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?q=80&w=1470&auto=format&fit=crop',
      bio: 'Dr. Thompson is a neurologist with particular interest in movement disorders and neurodegenerative diseases. He combines clinical expertise with a compassionate approach to patient care.'
    }
  ];
function Doctorspage() {
  return (
    <section className="doctors-section">
    <div className="doctors-header">
      <h1 className="doctors-title">Our Doctors</h1>
      <p className="doctors-subtitle">Meet our team of experienced healthcare professionals</p>
    </div>

    <div className="doctors-grid">
      {doctors.map(doctor => (
        <div className="doctor-card" key={doctor.id}>
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <div className="doctor-info">
            <h2 className="doctor-name">{doctor.name}</h2>
            <p className="doctor-specialty">{doctor.specialty}</p>
            <p className="doctor-bio">{doctor.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Doctorspage
