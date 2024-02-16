import React from "react";
import "./contactInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
  return (
    <div className="contact-info-container">
      <div className="contact-info-wrapper">
        <div className="contact-div">
          <FontAwesomeIcon size="2x" className="FaIcon" icon={faLocationDot} />
          <h3>Rue B18 El djeniena Ilot 79 El Mohammadia.</h3>
        </div>
        <div className="contact-div">
          <FontAwesomeIcon size="2x" className="FaIcon" icon={faEnvelope} />
          <h3>contact@techmology-dz.com</h3>
        </div>
        <div className="contact-div">
          <FontAwesomeIcon size="2x" className="FaIcon" icon={faPhone} />
          <h3>+(213) 780-264-008</h3>
        </div>
        <div className="contact-div">
          <FontAwesomeIcon size="2x" className="FaIcon" icon={faCalendarDay} />
          <h3>Dimanche - Jeudi / 8h30 - 16h30</h3>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
