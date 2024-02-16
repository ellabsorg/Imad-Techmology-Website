import React from "react";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faGraduationCap as graduationCapIcon } from "@fortawesome/free-solid-svg-icons";
import { faBox as boxIcon } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck as scheduleIcon } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className="hero-section-wrapper">
      <div className="hero-section">
        <div className="grey-square-holder">
          <div className="grey-square">
            <div className="grey-square-title">The Effective Science.</div>
          </div>
        </div>
        <div className="three-buttons">
          <div className="formations three-buttons-item">
            <Link className="three-buttons-item-link" to={"/formations"}>
              <FontAwesomeIcon
                size="2x"
                className="FaIcon"
                icon={graduationCapIcon}
                style={{ color: "FFFFFF" }}
              />
              Formations
            </Link>
          </div>
          <div className="produits three-buttons-item">
            <Link className="three-buttons-item-link" to={"/produits"}>
              <FontAwesomeIcon
                size="2x"
                className="FaIcon"
                icon={boxIcon}
                style={{ color: "FFFFFF" }}
              />
              Produits
            </Link>
          </div>
          <div className="evenements three-buttons-item">
            <Link className="three-buttons-item-link" to={"/evenement"}>
              <FontAwesomeIcon
                size="2x"
                className="FaIcon"
                icon={scheduleIcon}
                style={{ color: "FFFFFF" }}
              />
              Evenements
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
