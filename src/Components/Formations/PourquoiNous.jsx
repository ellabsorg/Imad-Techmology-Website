import React from "react";
import "./PourquoiNous.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faComments,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
function PourquoiNous() {
  return (
    <div className="PourquoiNous-Component">
      <div className="PourquoiNous-Container">
        <div className="PourquoiNous-title">
          <h2>POURQOUI NOUS !</h2>
        </div>
        <div className="PourquoiNous-elements">
          <div className="PourquoiNous-element">
            <div className="icon-holder">
              <FontAwesomeIcon className="icon" icon={faRocket} />
            </div>
            <div className="title-and-description">
              <h2 className="title">Contenu riche</h2>
              <div className="description">
                Notre programme est conçu pour vous donner toutes les
                connaissances et le bagage nécessaires pour améliorer vos
                compétences techniques ainsi que vos soft skills, ce qui vous
                permet de réussir dans votre vie professionnelle.
              </div>
            </div>
          </div>
          <div className="PourquoiNous-element">
            <div className="icon-holder">
              <FontAwesomeIcon className="icon" icon={faComments} />
            </div>
            <div className="title-and-description">
              <h2 className="title">Formation interactif</h2>
              <div className="description">
                Nous croyons en l'apprentissage par la pratique. Toutes nos
                formations sont interactives et riches en mini-projets pour
                s'assurer que vous acquerrez toutes les compétences pratiques
                nécessaires, pour vous donner la chance de créer vos propres
                projets et pour assurer que vous serez bien capable de réaliser
                vos propres idées par la suite.
              </div>
            </div>
          </div>
          <div className="PourquoiNous-element">
            <div className="icon-holder">
              <FontAwesomeIcon className="icon" icon={faHandshake} />
            </div>
            <div className="title-and-description">
              <h2 className="title">Instructeurs qualifiés</h2>
              <div className="description">
                Nos formateurs sont des individus expérimentés et
                exceptionnellement talentueux qui non seulement vont vous donner
                toutes les compétences nécessaires pour accélérer votre carrière
                professionnelle, mais qui sont également très aimables et vont
                garantir que vous vous amuserez en apprenant.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PourquoiNous;
