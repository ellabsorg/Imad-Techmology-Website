import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Contacts from "../Contacts";

function Navbar() {
  const navbarElements = [
    { name: "Acceuil", path: "/" },
    { name: "A propos", path: "/a-propos" },
    { name: "Formation", path: "/formations" },
    { name: "Produits", path: "/produits" },
    { name: "Evenements", path: "/evenements" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className="Navbar-Component">
      <div className="Navbar-Wrapper">
        <div className="NavbarContainer">
          <div className="logoSection">
            <Link id="logo" to={"/"}>
              Techmology
            </Link>
          </div>
          <Contacts />
          <div className="navbarElementsSection">
            {navbarElements.map((element, index) => (
              <Link key={index} className="NavbarElement" to={element.path}>
                {element.name}{" "}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
