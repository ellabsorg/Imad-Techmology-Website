import React from "react";
import "./inputField.css";

function Textarea({
  InameId,
  Ilabel,
  Iwidth,
  Iheight,
  Irows,
  handleFormInputChange,
  value,
  Validation,
}) {
  return (
    <div className="input-field-container">
      <label id="label" htmlFor={InameId}>
        {Ilabel} {Validation?.obligatory && <span id="obligatory">*</span>}
      </label>
      <textarea
        onChange={(e) => {
          handleFormInputChange(e);
        }}
        name={InameId}
        id={InameId}
        value={value}
        className="input-field"
        style={{ width: Iwidth, height: Iheight }}
        rows={Irows}
      />
      {!Validation?.validated(value) && (
        <p className="error-message">{Validation?.validationErrorMessage}</p>
      )}
    </div>
  );
}

export default Textarea;
