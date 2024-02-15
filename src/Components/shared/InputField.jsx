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
  return (
    <div className="input-field-container">
      <label id="label" htmlFor={InameId}>
        {Ilabel} {Validation?.obligatory && <span id="obligatory">*</span>}
      </label>
      <input
        onBlur={() => setActivateError(true)}
        onChange={(e) => {
          handleFormInputChange(e);
          setActivateError(true);
        }}
        type={Itype}
        name={InameId}
        id={InameId}
        value={value}
        className="input-field"
        style={{ width: Iwidth, height: Iheight }}
      />
      {activateError && !Validation.validated(value) && (
        <p className="error-message">{Validation?.validationErrorMessage}</p>
      )}
    </div>
  );
}

export default InputField;
