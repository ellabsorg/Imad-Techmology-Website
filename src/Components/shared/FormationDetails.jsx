import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./formationDetails.css";
import Navbar from "./Navbar";
import FORMATION_DETAILS from "../../constants/FORMATIONS";
import { mapper } from "../../constants/mapper";
import Footer from "../shared/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
// import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import NameDescriptionSection from "../FormationsDetails/NameDescriptionSection";
import GoalsSection from "../FormationsDetails/GoalsSection";
import LevelsSection from "../FormationsDetails/LevelsSection";

import ProgramSection from "../FormationsDetails/ProgramSection";
import DetaillesDeLaFormation from "../FormationsDetails/DetaillesDeLaFormation";
import PageNotFound from "./PageNotFound";

function FormationDetails() {
  const { formation_name } = useParams();
  // console.log("formation_name = ", formation_name);
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
  console.log(mapper?.[formation_name])
  return (
    <div>
      {mapper[formation_name] == undefined ? (
        <PageNotFound />
      ) : (
        <div>
          <Navbar />
          <div className="formationDetails-container">
            <div className="formationDetails-wrapper">
              <NameDescriptionSection formationData={formationData} />
              <GoalsSection formationData={formationData} />
              {formationData.multiple && (
                <LevelsSection
                  formationData={formationData}
                  handleLevelVisibilityTogle={handleLevelVisibilityTogle}
                  visibilityState={visibilityState}
                />
              )}
              {!formationData.multiple && (
                <>
                  <ProgramSection
                    formationData={formationData}
                    handleProgramVisibilityTogle={handleProgramVisibilityTogle}
                    visibilityState={visibilityState}
                  />
                  <DetaillesDeLaFormation
                    formationData={formationData}
                    handleProgramVisibilityTogle={handleProgramVisibilityTogle}
                    visibilityState={visibilityState}
                  />
                </>
              )}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default FormationDetails;
