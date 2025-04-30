import React, { useState } from 'react'
import '../Styles/Appointmentpage.css'
import Swal from 'sweetalert2';

function Appointmentpage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const departments = [
        { value: 'cardiology', label: 'Cardiology' },
        { value: 'orthopedics', label: 'Orthopedics' },
        { value: 'pediatrics', label: 'Pediatrics' },
        { value: 'general-surgery', label: 'General Surgery' },
        { value: 'dermatology', label: 'Dermatology' }
    ];

    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            Swal.fire({
                title: 'Appointment Request Received!',
                text: "We'll contact you shortly.",
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0077b6'
              });
              
            setIsSubmitting(false);
            setName('');
            setEmail('');
            setPhone('');
            setDepartment('');
            setDate('');
            setTime('');
            setMessage('');
        }, 1500);
    };

    return (
        <div className="appointments-container">
            <div className="appointments-banner">
                <h1>Book an Appointment</h1>
                <p>Schedule your visit with our healthcare professionals</p>
            </div>

            <div className="appointments-grid">
                <div className="appointment-info">
                    <h2>Request Your Appointment</h2>
                    <p>Fill out the form and we’ll contact you to confirm your visit.</p>

                    <ul className="appointment-steps">
                        <h4>What to expect:</h4><br/>
                        <li><strong>1.</strong> Complete and submit the appointment form.</li>
                        <li><strong>2.</strong> We’ll check availability and contact you.</li>
                        <li><strong>3.</strong> Confirm your time or choose an alternative.</li>
                        <li><strong>4.</strong> Receive confirmation with prep instructions.</li>
                    </ul>

                    <div className="emergency-box">
                        <h3>Need urgent care?</h3>
                        <p>For emergencies, call or visit our emergency department.</p>
                        <div className="emergency-number">Emergency: (123) 456-7890</div>
                    </div>
                </div>

                <form className="appointment-form" onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Your full name"
                    />
                    <div className='form-div'>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Your email address"
                            />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                placeholder="Your phone number"
                            />
                        </div>
                    </div>

                    <label>Department</label>
                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                    >
                        <option value="">Select a department</option>
                        {departments.map((dept) => (
                            <option key={dept.value} value={dept.value}>{dept.label}</option>
                        ))}
                    </select>
                    <div className='form-div'>
                    <div>
                    <label>Preferred Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                   </div><div>
                    <label>Preferred Time</label>
                    <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                        ))}
                    </select>
                    </div>
                    </div>

                    <label>Additional Information (Optional)</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        placeholder="Any specific concerns or instructions..."
                    ></textarea>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                    </button>

                    <p className="disclaimer">
                        By submitting this form, you agree to our privacy policy and consent
                        to be contacted regarding your request.
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Appointmentpage
