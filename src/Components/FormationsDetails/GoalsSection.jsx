import React from "react";

function GoalsSection({ formationData }) {
  return (
    <section className="formation-goals-section">
      <div className="formation-goal-title">
        <h1>Buts du Formation</h1>
      </div>
      <ul>
        {formationData.goals?.map((goalitem) => (
          <li className="formation-goal-item" key={goalitem.id}>
            {goalitem.goal}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GoalsSection;
