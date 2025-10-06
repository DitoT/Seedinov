import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Cameron D'Luacy",
    title: "TVMC Executive Director",
    text: "An excellent start to my project! Highly recommended for their great communication skills, on-time delivery, and flexibility."
  },
  {
    name: "Ioannis",
    title: "Head of Business Development",
    text: "I had a fruitful collaboration with seedron. Eager to continue working together for at least 10 years. Highly recommended for project starters."
  },
  {
    name: "Sam Sleek",
    title: "Co-Founding Investor",
    text: "The Seedron team has been a pleasure to work with. We’re partnering to build a complex A.I.-driven tech product, and every step of the way I’ve been impressed with their commitment to service, pace, quality, and flexibility. I’ve held some staff members review their code, and they are top-notch."
  },
  {
    name: "Andreas Kaliniger",
    title: "Director of Business Development",
    text: "Outstanding experience with the All Interview project! The team demonstrated a deep understanding of both technology and user needs, seamlessly integrating cutting-edge methods. Delivery was lightning-fast, and communication was proactive throughout the project. The precision in project management was impressive. Highly recommend this service to anyone serious about leveraging technology."
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>Hear From Our Clients</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.title}</h4>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;