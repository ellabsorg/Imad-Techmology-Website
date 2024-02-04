import React from "react";
import SwiperComponent from "../../Components/SwiperComponent";
import "./OurPartnersSection.css";

function OurPartnersSection() {
  return (
    <div className="our-partners-section">
      <div className="our-partners-container">
        <div className="our-partners-wrapper">
          <div className="our-partners-title">
            <h1>Nos Partenaires</h1>
          </div>
          <div className="our-partners-swiper">
            <SwiperComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPartnersSection;
