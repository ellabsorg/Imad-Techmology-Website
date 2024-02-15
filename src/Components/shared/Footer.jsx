import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight as arrowRightIcon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Contacts from "../../Pages/Contacts";

function Footer() {
  const navbarElements = [
    { name: "Acceuil", path: "/" },
    { name: "A propos", path: "/a-propos" },
    { name: "Formation", path: "/formations" },
    { name: "Produits", path: "/produits" },
    { name: "Evenements", path: "/evenements" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <div className="Footer-Container">
        <div className="Footer-Wrapper">
          <div className="Footer-White-Section">
            {navbarElements.map((element, index) => (
              <Link key={index} className="Footer-Element" to={element.path}>
                <FontAwesomeIcon
                  size="2x"
                  className="FaIcon"
                  icon={arrowRightIcon}
                  style={{ color: "rgb(0, 186, 121)" }}
                />
                {element.name}{" "}
              </Link>
            ))}
          </div>
          <div className="Footer-black-Section-wrapper">
            <div className="Footer-black-Section">
              <div className="footer-black-upper-section">
                <div className="footer-slogon">
                  <h2>FAISONS QUELQUE CHOSE DE GÉNIAL !</h2>
                </div>
                <div className="footer-contact-us-button-section">
                  <div className="footer-button">Contactez-nous</div>
                </div>
              </div>

              <div className="footer-black-lower-section">
                <div className="footer-logo lower-section-item ">
                  <Link className="footer-logo" to={"/"}>
                    Techmology
                  </Link>
                </div>
                <div className="footer-copyrights lower-section-item">
                  2022 © Techmology. Tous droits réservés.
                </div>
                <div className="footer-contacts lower-section-item">
                  <Contacts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
