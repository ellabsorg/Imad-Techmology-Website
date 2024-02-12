import React, { useState } from "react";
import "./contactForm.css";
import InputField from "./InputField";

function ContactForm() {
  const [formInputData, setFormInputData] = useState({});
  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(formInputData);
  const inputFieldsData = [
    {
      tag: "input",
      InameId: "name",
      Ilabel: "Name: ",
      Itype: "text",
      Iwidth: "210px",
    },
    {
      tag: "input",
      InameId: "lastname",
      Ilabel: "Lastname: ",
      Itype: "text",
      Iwidth: "210px",
    },
    {
      tag: "input",
      InameId: "email",
      Ilabel: "Email: ",
      Itype: "email",
      Iwidth: "460px",
    },
    {
      tag: "input",
      InameId: "phone",
      Ilabel: "Phone: ",
      Itype: "phone",
      Iwidth: "460px",
    },
    {
      tag: "input",
      InameId: "password",
      Ilabel: "Password: ",
      Itype: "password",
      Iwidth: "460px",
    },
    {
      tag: "input",
      InameId: "formation",
      Ilabel: "Formation souhaitée: ",
      Itype: "text",
      Iwidth: "460px",
    },
    {
      tag: "textarea",
      InameId: "message",
      Ilabel: "Message: ",
      Itype: "text",
      Iwidth: "460px",
      Iheight: "auto",
      Irows: "4",
    },
  ];
  return (
    <div className="contact-form-component">
      <div className="contact-form-container">
        <div className="contact-form-wrapper">
          <div className="name-lastname">
            {inputFieldsData.slice(0, 2).map((data, index) => (
              <InputField
                key={index}
                tag={data.tag}
                InameId={data.InameId}
                Ilabel={data.Ilabel}
                Itype={data.Itype}
                Iwidth={data.Iwidth}
                Iheight={data.Iheight}
                Irows={data.Irows}
                handleFormInputChange={handleFormInputChange}
              />
            ))}
          </div>
          {inputFieldsData.slice(2).map((data, index) => (
            <InputField
              key={index}
              tag={data.tag}
              InameId={data.InameId}
              Ilabel={data.Ilabel}
              Itype={data.Itype}
              Iwidth={data.Iwidth}
              Iheight={data.Iheight}
              Irows={data.Irows}
              handleFormInputChange={handleFormInputChange}
            />
          ))}
        </div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default ContactForm;
