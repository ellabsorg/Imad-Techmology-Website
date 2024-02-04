import React, { useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="dropdown-menu" onBlur={closeDropdown}>
      <div className="dropdown">
        <div className="dropdown-title" onClick={() => toggleDropdown(1)}>
          Dropdown 1
        </div>

        {activeDropdown === 1 && (
          <ul className="dropdown-content">
            <li className="dropdown-item">
              <a href="#">ItemOfDropdown1 1</a>
            </li>
            <li className="dropdown-item">
              <a href="#">ItemOfDropdown1 2</a>
            </li>
            <li className="dropdown-item">
              <a href="#">ItemOfDropdown1 3</a>
            </li>
          </ul>
        )}
      </div>




      <div className="dropdown">
        <div className="dropdown-title" onClick={() => toggleDropdown(2)}>
          Dropdown 2
        </div>

        {activeDropdown === 2 && (
          <ul className="dropdown-content">
            <li className="dropdown-item">
              <a href="#">ItemOfDropdown2 1</a>
            </li>
            <li className="dropdown-item">
              <a href="#">ItemOfDropdown2 2</a>
            </li>
            <li className="dropdown-item">
              <a href="#">ItemOfDropdown2 3</a>
            </li>
          </ul>
        )}
      </div>





      <div className="dropdown">
        <div className="dropdown-title" onClick={() => toggleDropdown(3)}>
          Dropdown 3
        </div>

        {activeDropdown === 3 && (
          <ul className="dropdown-content">
            <li className="dropdown-item">
              <a href="#">ItemOfDropdown3 1</a>
            </li>
            <li className="dropdown-item">
              <a href="#">ItemOfDropdown3 2</a>
            </li>
            <li className="dropdown-item">
              <a href="#">ItemOfDropdown3 3</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
