import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ConsultationModal.css';

export default function ConsultationModal({ onClose }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>Book a Free Consultation with Ehtisham Ul Haq</h2>
        <p>Duration: 15 minutes</p>
        <div className="calendar-container">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            minDate={new Date()}
          />
        </div>
        <p className="timezone">Time Zone: Georgia Time</p>
        <a href="#" className="cookie-link">Cookie settings</a>
        <div className="calendly-banner">Calendly</div>
      </div>
    </div>
  );
}
