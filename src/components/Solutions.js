import React, { useState } from "react";
import "./Solutions.css";

const Solutions = () => {
  const data = {
    "Real Estate": [
      { icon: "🏠", title: "Property Valuation", description: "AI analyzes market trends and property specifics to provide accurate and dynamic valuations." },
      { icon: "📋", title: "Lead Scoring", description: "Score potential leads based on their likelihood to purchase, allowing agents to focus on high-value prospects." },
      { icon: "💬", title: "Chatbots for Customer Support", description: "Provide 24/7 customer support with AI-driven chatbots that answer inquiries and schedule showings." },
    ],
    Education: [
      { icon: "📚", title: "Personalized Learning", description: "AI tailors learning experiences based on individual student needs and progress." },
      { icon: "🧑‍🏫", title: "Teacher Assistance", description: "Automate grading and provide insights to improve teaching strategies." },
      { icon: "📖", title: "Content Generation", description: "Create engaging educational content with AI-powered tools." },
    ],
    "E-Commerce": [
      { icon: "🛒", title: "Product Recommendations", description: "AI analyzes user behavior to suggest personalized product recommendations." },
      { icon: "📦", title: "Inventory Management", description: "Optimize inventory levels with AI-driven demand forecasting." },
      { icon: "📈", title: "Sales Predictions", description: "Use AI to predict sales trends and improve marketing strategies." },
    ],
    Solar: [
      { icon: "☀️", title: "Energy Efficiency", description: "AI optimizes solar panel usage to maximize energy efficiency." },
      { icon: "🔋", title: "Battery Optimization", description: "Improve energy storage with AI-driven battery management systems." },
      { icon: "📊", title: "Performance Analytics", description: "Monitor and analyze solar system performance with AI tools." },
    ],
    Medical: [
      { icon: "💉", title: "Disease Detection", description: "AI helps in the early detection of diseases through advanced diagnostic tools." },
      { icon: "🩺", title: "Patient Monitoring", description: "Real-time patient monitoring with AI-powered devices." },
      { icon: "🧬", title: "Genomic Analysis", description: "Analyze genomic data to assist in personalized medicine." },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("Real Estate");

  return (
    <div className="solutions-section">
      <div className="solutions-header">
        <button className="use-cases-btn">Use Cases</button>
        <h1>Solutions For Everything.</h1>
        <p>
          Your business needs technology that adapts and anticipates change, not just reacts. We partner with you to imagine,
          design, build, and optimize solutions that are intelligently responsive to dynamic market conditions.
        </p>
      </div>
      <div className="category-buttons">
        {Object.keys(data).map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="solutions-grid">
        {data[selectedCategory].map((item, index) => (
          <div key={index} className="solution-box">
            <div className="solution-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;