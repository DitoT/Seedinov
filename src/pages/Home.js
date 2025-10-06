import React from "react";

import Introduction from "../components/introduction";
import "../components/introduction.css";

import LogoCarousel from "../components/LogoCarousel";
import "../components/LogoCarousel.css";

import Start from "../components/start";
import "../components/start.css";

import CaseStudies from "../components/caseStudies";
import "../components/caseStudies.css";

import Projects from "../components/projects";
import "../components/projects.css";

import ClientSection from "../components/ClientSection";
import "../components/ClientSection.css";

import Services from "../components/Services";
import "../components/Services.css";

import IdeaSection from "../components/IdeaSection";
import "../components/IdeaSection.css";

import Solutions from "../components/Solutions";
import "../components/Solutions.css";

import ClientDashboard from "../components/ClientDashboard";
import "../components/ClientDashboard.css";

import Testimonials from "../components/Testimonials";
import "../components/Testimonials.css";

function Home() {
  return (
    <div className="Home">
      <Introduction />
      <LogoCarousel />
      <Start />
      <CaseStudies />
      <Projects />
      <ClientSection />
      <Services />
      <IdeaSection />
      <Solutions />
      <ClientDashboard />
      <Testimonials />
    </div>
  );
}

export default Home;
