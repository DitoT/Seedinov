import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./introduction.css";
import ConsultationModal from "./ConsultationModal";

function Introduction() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="Introduction">
      <div className="top_content">
        <h1>SeenInov.</h1>
        <a onClick={() => navigate("/blogs")} className="nav-link">blogs</a>
        <button onClick={() => setShowModal(true)}>Let's Talk</button>
      </div>

      <div className="mid_content">
        <h3>LET'S GET REAL</h3>
        <h2>Go from AI-Ready to AI-Powered with</h2>
        <h1>SeenInov</h1>

        <p>
          Equip your business with technology that doesn’t just keep up—it leads the way. At SeedInov, we team up with you to envision, design, and develop complex AI solutions that respond intelligently to evolving market demands, setting you apart from conventional tech. Let' start your journey to a future where you are not just AI-ready; but AI-powered.
        </p>

        <button onClick={() => navigate("/voice-input")}>
          Checkout AI Readiness of your business
        </button>

        <h2>From Startups To Enterprises, Our Trusted Partners</h2>
      </div>

      {showModal && <ConsultationModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Introduction;
