import React from "react";
import "./ClientSection.css";

export default function ClientSection() {
  const clients = [
    {
      video: "https://via.placeholder.com/400x400.png?text=Client+1+Video",
      thumbnail: "https://via.placeholder.com/400x400.png?text=Client+1",
    },
    {
      video: "https://via.placeholder.com/400x400.png?text=Client+2+Video",
      thumbnail: "https://via.placeholder.com/400x400.png?text=Client+2",
    },
  ];

  return (
    <div className="client-section">
      <h4 className="client-subtitle">OUR CLIENTS ARE OUR SUPER HEROES</h4>
      <h1 className="client-title">
        We Take Pride In Delivering Excellence Through{" "}
        <span>Quality Products</span>, Professional Training, And Streamlined{" "}
        <span>Execution</span>
      </h1>

      <div className="client-video-container">
        {clients.map((client, index) => (
          <div className="client-video-card" key={index}>
            <div className="client-video-wrapper">
              <img
                src={client.thumbnail}
                alt={`Client ${index + 1}`}
                className="client-thumbnail"
              />
              <div className="play-button">&#9658;</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
