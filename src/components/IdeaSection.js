import React from 'react';
import './IdeaSection.css';

const IdeaSection = () => {
  const services = [
    {
      icon: "🤖",
      title: "Generative AI",
      description:
        "Reimagine your business with SeedInov's Generative AI, built to inspire original ideas and deliver tailored, impactful content. Our AI adapts to your industry needs, boosting customer engagement, driving innovation, and keeping you ahead of trends.",
    },
    {
      icon: "📊",
      title: "Machine Learning",
      description:
        "Leverage Machine Learning with SeedInov to turn data into actionable insights. Our solutions analyse patterns, predict outcomes, and optimise operations to drive smarter decisions. We build scalable, adaptable models tailored to your goals, empowering your business to thrive in a data-driven world.",
    },
    {
      icon: "🖼️",
      title: "Computer Vision",
      description:
        "Discover new perspectives with SeedInov’s advanced Computer Vision solutions. From object detection to image analysis, our technology empowers your business to interpret visual data accurately and efficiently. Enhance product quality, automate tasks, and gain impactful, real-time insights with ease.",
    },
    {
      icon: "🤖",
      title: "Artificial Intelligence",
      description:
        "Elevate your competitive edge with SeedInov’s adaptive AI solutions that streamline processes, automate workflows, and deliver unparalleled decision-making capabilities tailored to your business needs.",
    },
  ];

  return (
    <section className="idea-section">
      <div className="idea-header">
        <h1>
          We Design Innovative Solutions, Revitalize Systems, And Deliver
          Exceptional Results Faster Than <span>Industry</span> Standards.
        </h1>
      </div>
      <div className="idea-content">
        <div className="idea-card">
          <div className="idea-icon">✈️</div>
          <h2>Fuel Your Digital-First Idea</h2>
          <p>With 1600+ Transformation Experts</p>
        </div>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;