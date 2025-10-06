import React from "react";
import "./ClientDashboard.css";

const ClientDashboard = () => {
  const stats = [
    {
      count: "100+",
      title: "Served Clients Across the Globe",
      description:
        "We've partnered with clients worldwide, delivering customized AI and tech solutions to meet diverse business needs across industries.",
    },
    {
      count: "15+",
      title: "Team Members and Advisors",
      description:
        "Our experienced team of developers, strategists, and advisors is committed to helping clients achieve their goals with advanced, tailored support.",
    },
    {
      count: "20+",
      title: "Projects Built and Deployed",
      description:
        "From ideation to launch, we've successfully completed and deployed over 20 projects, ensuring quality and client satisfaction every step of the way.",
    },
    {
      count: "5+",
      title: "Years of Excellence",
      description:
        "Our team's dedication and expertise have driven consistent success and growth, empowering businesses with technology they can rely on.",
    },
  ];

  return (
    <section className="client-dashboard">
      <div className="header">
        <h2>OUR VALUABLE CLIENTS</h2>
        <h1>Client Success Dashboard</h1>
      </div>
      <div className="content">
        <div className="map-container">
          <img
            src="https://via.placeholder.com/600x400"
            alt="World Map"
            className="world-map"
          />
        </div>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <h3 className="count">{stat.count}</h3>
              <h4 className="title">{stat.title}</h4>
              <p className="description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientDashboard;