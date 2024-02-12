import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function LevelsSection({
  formationData,
  handleLevelVisibilityTogle,
  visibilityState,
}) {
  return (
    <section className="levels-section">
      <h1 className="niveaux-title">Niveaux</h1>
      <div className="level-items">
        {formationData.levels.map((level, levelIndex) => (
          <div className="level-item" key={levelIndex}>
            <div
              className="level-name-item"
              onClick={() => handleLevelVisibilityTogle(levelIndex)}
            >
              <h2 className="level-name">
                {visibilityState.levels[levelIndex] ? (
                  <span>
                    <FontAwesomeIcon icon={faCaretUp} />
                    {"   "}
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faCaretRight} />
                    {"   "}
                  </span>
                )}
                Niveau {levelIndex}: {level.name}
              </h2>
            </div>
            {visibilityState.levels[levelIndex] && (
              <div className="level-info">
                <div className="level-description-item">
                  <h3> &gt;Descriptions de la formation :</h3>
                  <p>{level.description}</p>
                </div>
                <div className="level-details-items">
                  <h3> &gt;Détailles de la formation :</h3>
                  <ul>
                    {level.details.map((detail, index) =>
                      detail.type !== "note" ? (
                        <li className="level-details-item" key={index}>
                          {detail.description}
                        </li>
                      ) : (
                        <li className="level-details-item note" key={index}>
                          {detail.description}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="level-program-items">
                  <h3> &gt;Programme de la formation :</h3>
                  <ul>
                    {level.programme.map((program, index) => (
                      <li className="level-program-item" key={index}>
                        {program.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default LevelsSection;
