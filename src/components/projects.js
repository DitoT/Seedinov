import React from "react";
import "./projects.css";

export default function Projects() {
  const projects = [
    {
      title: "AI Coaching for Aspiring Pilots Ready to Level Up",
      category: "Education",
      overview:
        "Voice-activated GPT assistant that delivers personalized drone training recommendations based on your experience level, local regulations, and career goals. From hobbyist to commercial pilot certification, get instant guidance that adapts to your learning journey.",
      image: "https://via.placeholder.com/400x250?text=Drone+Training",
    },
    {
      title: "Procurement Copilot for Teams Who Dread RFPs",
      category: "Procurement",
      overview:
        "Intelligent RFP analysis platform that reads complex procurement documents like an expert consultant. Automatically flags compliance risks, highlights critical clauses, extracts key requirements, and provides instant answers to specification questions – saving procurement teams hours of manual review.",
      image: "https://via.placeholder.com/400x250?text=Procurement+Copilot",
    },
    {
      title: "AI Slides for Educators Who Teach, Not Just Present",
      category: "Education",
      overview:
        "AI-powered presentation generator designed specifically for teachers and trainers. Input any topic and receive complete, classroom-ready slide decks.",
      image: "https://via.placeholder.com/400x250?text=AI+Slides+for+Educators",
    },
  ];

  return (
    <div className="projects-section">
      <h3 className="section-subtitle">GPT POWERED PROJECTS</h3>
      <h1 className="section-title">
        Discover Powerful <span>GPT-Powered</span> Use Cases for Transforming
        Your Business
      </h1>
      <p className="section-desc">
        Empowering Your Business with Adaptive Technology That Leads, Not
        Follows. Together, We Imagine, Design, and Build.
      </p>

      <div className="projects-container">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-text">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-category">
                <span>Category:</span> {project.category}
              </p>
              <p className="project-overview">
                <span>Overview:</span> {project.overview}
              </p>
            </div>
            <img src={project.image} alt={project.title} className="project-img" />
          </div>
        ))}
      </div>
    </div>
  );
}
