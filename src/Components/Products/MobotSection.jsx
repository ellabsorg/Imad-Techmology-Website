import React from "react";
import "./MobotSection.css";
import MobotLogo from "../../Assets/MOBOT-logo.jpg";
function MobotSection() {
  return (
    <div>
      <div className="Mobot-Section-Container">
        <div className="Mobot-Section-Wrapper">
          <div className="Mobot-Section-Left">
            <img src={MobotLogo} alt="" />
          </div>

          <div className="Mobot-Section-Right">
            <div className="text">Mobot</div>
            <div className="description">
              MoBot est une série de kit de robotique gradué par niveau de
              complexité dédie aux petits comme aux grands développé et produits
              en Algérie. Ils ont comme objectif de faire voyager leurs chanceux
              détenteurs dans le vaste domaine de la robotique tout en leurs
              apprenant les différentes notions nécessaires pour chaque kit a
              travers des playlists de vidéos.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobotSection;
