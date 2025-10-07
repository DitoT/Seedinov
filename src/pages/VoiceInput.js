import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VoiceInput.css';

export default function VoiceInput() {
  const [recording, setRecording] = useState(false);
  const navigate = useNavigate();

  const handleMicClick = () => {
    setRecording(!recording);
  };

  return (
    <div className="voice-recorder">
      <h2 className="header-text">
        Empower Your Business with Cutting-Edge <span>Technology Solutions!</span>
      </h2>

      <div className="mic-section" onClick={handleMicClick}>
        <div className="mic-icon">🎤</div>
        <p className="mic-label">Tap To Speak</p>
      </div>

      <div className="dialog-box">
        {recording ? 'Recording Audio...' : 'No Audio Recorded'}
      </div>

      <p className="footer-text">
        Our AI Experts Will Personally Look Into Your Query And Give You A Response.
      </p>

      <button className="home-button" onClick={() => navigate('/')}>
        Go Back to Home
      </button>
    </div>
  );
}
