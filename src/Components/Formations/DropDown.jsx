import React from "react";
import "./DropDown.css";
import { dropdownElements } from "../../constants/DropdownData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function DropDown() {
  console.log("dropdownData = ", dropdownElements[0].items[0].label);
  return (
    <div className="dropdown-component">
      <div className="dropdown-container">
        <div className="dropdown-wrapper">
          {/* ===============================  ===================================== */}
          {/* ELEMENT */}
          {dropdownElements.map((element, index) => (
            <div key={index} className="dropdown-Element">
              <div className="dropdown-title">
                {element.items.length > 0 && (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
                {element.link ? (
                  <Link className="element-with-link" to={element.link}>
                    {element.title}
                  </Link>
                ) : (
                  element.title
                )}
              </div>
              <div className="drop-down-items">
                <ul>
                  {element.items.map((item, index) => (
                    <Link key={index} className="Dropdown-Link" to={item.url}>
                      <li>{item.label}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* ============================================================================== */}
        </div>
      </div>
    </div>
  );
}

export default DropDown;
