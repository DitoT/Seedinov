import React from "react";
import "./caseStudies.css";

const CaseStudies = () => {
  const studies = [
    {
      title: "Project S",
      category: "Team Management, Matchmaking and Map Selection",
      overview:
        "An AI-powered platform specifically made for organising and managing Call of Duty tournaments. It incorporates AI-driven features that automate tasks like reporting (e.g., tracking scores or reporting issues) and tournament management to enable fair and competitive play.",
      image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "AI Commerce",
      category: "Recommendation Systems, E-commerce",
      overview:
        "A personalized AI-powered shopping assistant that helps customers discover products, predicts preferences, and generates tailored recommendations using advanced machine learning models.",
      image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Smart Health",
      category: "Healthcare, Predictive Analytics",
      overview:
        "A medical data analysis platform that predicts patient risks, automates health monitoring, and provides early diagnostic insights with AI-based prediction models.",
      image: "https://images.unsplash.com/photo-1581091215367-59ab6c33b24c?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="case-studies">
      <h1>
        Our <span>Case</span> Studies
      </h1>
      <div className="case-scroll">
        {studies.map((s, i) => (
          <div className="case-card" key={i}>
            <div className="case-text">
              <h2>{s.title}</h2>
              <h3>Category:</h3>
              <p className="category">{s.category}</p>
              <h3>Overview:</h3>
              <p>{s.overview}</p>
            </div>
            <div className="case-img">
              <img src={s.image} alt={s.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
