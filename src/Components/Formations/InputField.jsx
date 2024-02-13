import React, { useState } from "react";
import "./inputField.css";

function InputField({
  InameId,
  Ilabel,
  Itype,
  Iwidth,
  Iheight,
  handleFormInputChange,
  value,
  Validation,
}) {
  const [activateError, setActivateError] = useState(false);
  const handleBlur = () => {
    setActivateError(!Validation.validated(value) || false);
  };
  return (
    <div className="input-field-container">
      <label id="label" htmlFor={InameId}>
        {Ilabel} {Validation?.obligatory && <span id="obligatory">*</span>}
      </label>
      <input
        onBlur={handleBlur}
        onChange={(e) => {
          handleFormInputChange(e);
          handleBlur();
        }}
        type={Itype}
        name={InameId}
        id={InameId}
        value={value}
        className="input-field"
        style={{ width: Iwidth, height: Iheight }}
      />
      {activateError && (
        <p className="error-message">{Validation?.validationErrorMessage}</p>
      )}
    </div>
  );
}

export default InputField;
