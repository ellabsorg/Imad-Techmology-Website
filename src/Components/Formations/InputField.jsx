import React from "react";
import "./inputField.css";

function InputField({
  tag,
  InameId,
  Ilabel,
  Itype,
  Iwidth,
  Iheight,
  Irows,
  handleFormInputChange,
}) {
  const Tag = tag || "input";
  return (
    <div className="input-field-container">
      <label id="label" htmlFor={InameId}>
        {Ilabel}
      </label>
      <Tag
        onChange={handleFormInputChange}
        type={Itype}
        name={InameId}
        id={InameId}
        className="input-field"
        style={{ width: Iwidth, height: Iheight }}
        rows={Irows}
      />
    </div>
  );
}

export default InputField;
