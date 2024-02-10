import React from "react";
import HeroSection from "../Components/shared/HeroSection";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";
import "./Apropos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faClockRotateLeft,
  faShieldHalved,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

function Apropos() {
  const title = "Qui sommes-nous ?";
  const description =
    "Réaliser des prestations de qualité et utiliser la science de manière efficace de façon à rendre le quotidien de chacun plus agréable";
  return (
    <div>
      <Navbar />
      <HeroSection description={description} title={title} />
      <div className="Apropos-Container">
        <div className="Apropos-Wrapper">
          <div className="Sous-Description">
            Née de l’union d’ingénieurs passionnés et dynamiques, Techmology est
            une entreprise de conception et développement de solutions
            matérielles. Nous mettons notre savoir-faire ainsi que nos
            compétences afin de proposer des produits pensé, désigné et
            développé en Algérie dans le but de faciliter notre quotidien à
            tous. Par ailleurs, fidèle à nos valeurs de partage et d’engagement
            auprès de notre communauté, nous proposons des formations
            qualifiantes dans divers domaines en plus des événements que nous
            organisons régulièrement.
          </div>
          <div className="nos-valeurs-container">
            <div className="nos-valeurs-wrapper">
              <div className="nos-valeurs-title">Nos valeurs</div>
              <div className="nos-valeurs-elemets">
                <div className="nos-valeurs-element">
                  <div className="nos-valeurs-icon">
                    <FontAwesomeIcon
                      size="4x"
                      className="FaIcon"
                      icon={faMedal}
                    />
                  </div>
                  <div className="nos-valeurs-text">Qualité</div>
                </div>

                <div className="nos-valeurs-element">
                  <div className="nos-valeurs-icon">
                    <FontAwesomeIcon
                      size="4x"
                      className="FaIcon"
                      icon={faClockRotateLeft}
                    />
                  </div>
                  <div className="nos-valeurs-text">Disponibilité</div>
                </div>

                <div className="nos-valeurs-element">
                  <div className="nos-valeurs-icon">
                    <FontAwesomeIcon
                      size="4x"
                      className="FaIcon"
                      icon={faShieldHalved}
                    />
                  </div>
                  <div className="nos-valeurs-text">Confiance</div>
                </div>

                <div className="nos-valeurs-element">
                  <div className="nos-valeurs-icon">
                    {" "}
                    <FontAwesomeIcon
                      size="4x"
                      className="FaIcon"
                      icon={faHandshake}
                    />
                  </div>
                  <div className="nos-valeurs-text">Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Apropos;
