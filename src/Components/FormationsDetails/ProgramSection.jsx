import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
function ProgramSection({
  formationData,
  handleProgramVisibilityTogle,
  visibilityState,
}) {
  return (
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
              onClick={() => handleProgramVisibilityTogle(programIndex)}
            >
              {visibilityState.programItems[programIndex] ? (
                <span>
                  <FontAwesomeIcon icon={faCaretUp} />
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon icon={faCaretRight} />
                </span>
              )}
              {program.description}
            </div>
            {program.items && visibilityState.programItems[programIndex] && (
              <ul className="program-sous-items">
                {program.items.map((item, index) => (
                  <div>
                    <li key={index} className="program-sous-item">
                      {item.description}
                    </li>
                    {item.subtitles && (
                      <ul>
                        {item.subtitles.map((subtitle, index) => (
                          <li>{subtitle}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </section>
  );
}

export default ProgramSection;
