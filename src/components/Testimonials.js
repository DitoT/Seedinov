import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Cameron D'Arcy",
    title: "CEO of Brightworks - TVC video content production",
    text: "An excellent start to our project! Highly recommended for their great communication skills, on-time delivery, and flexibility.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "leonaslt",
    title: "Entrepreneur",
    text: "I had a fruitful collaboration with seedinov. Eager to continue working together for at least 10 years. Highly recommend for project starters.",
    img: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Sam Slezek",
    title: "Venture Capital Investor",
    text: "The Seedinov team have been a pleasure to work with. We're partnering to build a complex AI-driven tech product, and every step of the way I've been impressed with their communication, pace, quality, and flexibility. I've had some staff engineers review their code, and they've concluded the same thing -- these guys are killer. Cannot recommend highly enough.",
    img: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    name: "Andreas Kolbinger",
    title: "Head of Marketing & Business Development",
    text: "Outstanding experience with the AI Interviewer project! The team demonstrated a deep understanding of both recruiting and AI, seamlessly integrating cutting-edge technology with real-world interview scenarios. Delivery was lightning-fast, and communication was proactive throughout the project. The professionalism in project management was evident, making the whole process smooth and efficient. Highly recommend this service to anyone serious about leveraging AI projects to enhance their business processes!",
    img: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

export default function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h4>Client Testimonials</h4>
        <h2>Hear From Our Clients</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((item, i) => (
          <div key={i} className="testimonial-card">
            <div className="testimonial-profile">
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.title}</p>
              </div>
            </div>
            <p className="testimonial-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
