import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./formationDetails.css";
import Navbar from "./Navbar";
import FORMATION_DETAILS from "../../constants/FORMATIONS";
// import mydata from "../../constants/mydata";
import { mapper } from "../../constants/mapper";
import Footer from "../shared/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function FormationDetails() {
  const { formation_name } = useParams();
  const [visibilityState, setVisibilityState] = useState({
    levels: {},
    programItems: {},
  });
  const formationIndex = mapper[formation_name];
  const formationData = FORMATION_DETAILS[formationIndex];
  console.log(visibilityState);

  const handleLevelVisibilityTogle = (levelIndex) => {
    setVisibilityState((prevState) => ({
      ...prevState,
      levels: {
        ...prevState.levels,
        [levelIndex]: !prevState.levels[levelIndex],
      },
    }));
  };
  const handleProgramVisibilityTogle = (programIndex) => {
    setVisibilityState((prevState) => ({
      ...prevState,
      programItems: {
        ...prevState.programItems,
        [programIndex]: !prevState.programItems[programIndex],
      },
    }));
  };
  return (
    <div>
      <Navbar />
      <div className="formationDetails-container">
        <div className="formationDetails-wrapper">
          {/* =====================FORMATION SECTION================= */}

          <section className="formation-section">
            <div className="formation-info">
              <h1 className="formation-name">{formationData.title}</h1>
              <p className="formation-description">
                {formationData.description}
              </p>
              <button className="subscripte-button">Subscribe</button>
            </div>
            <div className="formation-gallery">
              <h1>Imaginih Gallery</h1>
            </div>
          </section>
          {/* =====================GOALS SECTION===================== */}
          <section className="formation-goals-section">
            <div className="formation-goal-title">
              <h1>Buts du Formation</h1>
            </div>
            <ul>
              {formationData.goals.map((goalitem) => (
                <li className="formation-goal-item" key={goalitem.id}>
                  {" "}
                  {goalitem.goal}
                </li>
              ))}
            </ul>
          </section>
          {/* =====================LEVELS SECTION===================== */}
          {/* =====================MULTIPLE ========================== */}
          {formationData.multiple && (
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
                                <li
                                  className="level-details-item note"
                                  key={index}
                                >
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
          )}
          {/* =====================SINGLE========================== */}
          {!formationData.multiple && (
            <>
              <section className="programme-section">
                <div className="programme-title">
                  <h1> Programme</h1>
                </div>
                <ul className="programme-items">
                  {formationData.programme.map((program, programIndex) => (
                    <div key={programIndex}>
                      <div
                        className="programme-item"
                        key={programIndex}
                        onClick={() =>
                          handleProgramVisibilityTogle(programIndex)
                        }
                      >
                        {visibilityState.programItems[programIndex] ? (
                          <span>
                            <FontAwesomeIcon icon={faCaretUp} />
                            {"    "}
                          </span>
                        ) : (
                          <span>
                            <FontAwesomeIcon icon={faCaretRight} />
                            {"    "}
                          </span>
                        )}
                        {program.description}
                      </div>
                      {program.items &&
                        visibilityState.programItems[programIndex] && (
                          <ul className="program-sous-items">
                            {program.items.map((item, index) => (
                              <li key={index} className="program-sous-item">
                                {item.description}
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>
                  ))}
                </ul>
              </section>

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
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FormationDetails;
