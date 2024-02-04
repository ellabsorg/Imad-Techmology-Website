import React from "react";
import "./HeroSection.css";

function HeroSection({ title, description }) {
  return (
    <div>
      <div className="HeroSectionWrapper">
        <div className="HeroSection">
          <div className="HeroSectionTitle">{title}</div>
          {description ? (
            <div className="HeroSectionDescription">{description}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
