import React from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram as InstagramIcon } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin as LinkedinIcon } from "@fortawesome/free-brands-svg-icons";
import { faYoutube as YoutubeIcon } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook as FacebookIcon } from "@fortawesome/free-brands-svg-icons";

function Contacts() {
  return (
    <div>
      <div className="contactsSection">
        <div className="contactsItem">
          <a href="https://www.instagram.com" target="blank">
            <FontAwesomeIcon
              size="2x"
              className="FaIcon"
              icon={InstagramIcon}
              style={{ color: "197BFF" }}
            />
          </a>
        </div>
        <div className="contactsItem">
          <a href="https://www.facebook.com" target="blank">
            <FontAwesomeIcon
              size="2x"
              className="FaIcon"
              icon={FacebookIcon}
              style={{ color: "197BFF" }}
            />
          </a>
        </div>
        <div className="contactsItem">
          <a href="https://www.youtube.com" target="blank">
            <FontAwesomeIcon
              size="2x"
              className="FaIcon"
              icon={YoutubeIcon}
              style={{ color: "197BFF" }}
            />
          </a>
        </div>
        <div className="contactsItem">
          <a href="https://www.linkedin.com" target="blank">
            <FontAwesomeIcon
              size="2x"
              className="FaIcon"
              icon={LinkedinIcon}
              style={{ color: "197BFF" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
