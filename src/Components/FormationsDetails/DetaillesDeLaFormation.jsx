import React from "react";

function DetaillesDeLaFormation({ formationData }) {
  return (
    <section className="details-section">
      <div className="detail-title">
        <h1> Détailles de la formation :</h1>
      </div>
      <ul className="detail-items">
        {formationData.details.map((detail, index) =>
          detail.type !== "note" ? (
            <li className="detail-item" key={index}>
              {detail.description}
            </li>
          ) : (
            <li className="detail-item note" key={index}>
              {detail.description}
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default DetaillesDeLaFormation;
