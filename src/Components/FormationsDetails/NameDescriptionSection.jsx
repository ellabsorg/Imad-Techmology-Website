import React from "react";

function NameDescriptionSection({ formationData }) {
  return (
    <section className="formation-section">
      <div className="formation-info">
        <h1 className="formation-name">{formationData.title}</h1>
        <p className="formation-description">{formationData.description}</p>
        <button className="subscripte-button">Subscribe</button>
      </div>
      <div className="formation-gallery">
        <h1>Gallery Swiper</h1>
      </div>
    </section>
  );
}

export default NameDescriptionSection;
