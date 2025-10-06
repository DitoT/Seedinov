import React from 'react';
import './Services.css';

const services = [
  {
    icon: "📄",
    title: "AI Development And Consulting",
    description: "Harness the power of AI with tailored solutions in machine learning, natural language processing, and computer vision. Empower your business with innovative, data-driven technologies."
  },
  {
    icon: "💻",
    title: "SaaS Development",
    description: "Unlock the potential of cloud-based solutions with custom SaaS development tailored to your business needs. Streamline operations, enhance scalability, and deliver exceptional user experiences."
  },
  {
    icon: "🤖",
    title: "Generative AI Services",
    description: "Leverage cutting-edge generative AI for content creation and design automation. Deliver smarter, faster, and more creative solutions to meet your business needs."
  },
  {
    icon: "⚙️",
    title: "IT Outsourcing and DevOps",
    description: "Optimize your IT infrastructure with reliable outsourcing and DevOps solutions, ensuring seamless operations and scalability."
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>OUR CORE SERVICES</h2>
        <h1>Explore the realm of AI-Driven Digital Solutions and Transformation Services</h1>
        <p>Your business needs technology that adapts and anticipates change, not just reacts. We partner with you to imagine, design, build.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;