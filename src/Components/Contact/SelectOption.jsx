import React from "react";
import "./selectOption.css";

function SelectOption({ handleFormInputChange, value }) {
  return (
    <div className="select-option-component">
      <label id="label" htmlFor="vousEtes">
        Vous êtes <span id="obligatory">*</span>
      </label>
      <select
        name="vousEtes"
        id="vousEtes"
        className="select"
        onChange={(e) => {
          handleFormInputChange(e);
        }}
      >
        <option value="particulier" selected="selected" className="option">
          Particulier
        </option>
        <option value="entreprise" className="option">
          Entreprise
        </option>
      </select>
    </div>
  );
}

export default SelectOption;
