import React from "react";
import "./LogoCarousel.css";

function LogoCarousel() {
  const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png", alt: "Apple" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg", alt: "Google" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Amazon_logo.svg", alt: "Amazon" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Meta_Platforms_Inc._logo.svg", alt: "Meta" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/0/02/Adobe_Corporate_Logo.png", alt: "Adobe" }
  ];

  return (
    <div className="logo-carousel">
      <div className="logo-track">
        {logos.concat(logos).map((logo, index) => (
          <div className="logo" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
      <div className="line">
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default LogoCarousel;
