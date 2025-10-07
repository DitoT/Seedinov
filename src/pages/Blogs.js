import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import Footer from "../components/Footer";
import ConsultationModal from "../components/ConsultationModal";

const BlogsPage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="blogs-container">
      <nav className="navbar">
        <div className="logo">
          <span className="gear">⚙</span>SeedInov.
        </div>
        <div className="nav-links">
          <a href="#blogs">Blogs</a>
          <button className="talk-btn" onClick={() => setShowModal(true)}>Let’s Talk</button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Our <span>Blogs</span>
          </h1>
          <p>A learning hub to provide you with extensive knowledge!</p>
          <button className="ai-button" onClick={() => navigate("/voice-input")}>
            Checkout AI Readiness of your business <span>+</span>
          </button>
        </div>
        <div className="hero-card">
          <div className="card-image">
            <div className="sphere"></div>
            <div className="wave-icon">🔊</div>
          </div>
          <h2>
            Revolutionizing Workflows with Real-Time Voice Agents: Solving Real
            Problems, One Conversation at a Time
          </h2>
        </div>
      </section>

      <section className="explore-section">
        <h1>
          Explore Our <span>Blogs</span>
        </h1>
        <p>A blog created with Love for Seedinov</p>
        <div className="blog-card">
          <div className="card-image">
            <div className="sphere"></div>
            <div className="wave-icon">🔊</div>
          </div>
          <h2>
            Revolutionizing Workflows with Real-Time Voice Agents: Solving Real
            Problems, One Conversation at a Time
          </h2>
        </div>
      </section>
      {showModal && <ConsultationModal onClose={() => setShowModal(false)} />}
        <Footer />
    </div>
  );
};

export default BlogsPage;
