import React, { useState } from "react";
import "./contactForm.css";
import InputField from "../shared/InputField";
import Textarea from "../shared/Textarea";

function ContactForm() {
  const [formInputData, setFormInputData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    message: "",
  });

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputData((prev) => ({ ...prev, [name]: value }));
  };

  const validationSchema = {
    name: {
      validated: (value) => {
        const nameRegEx = /^[a-zA-Z\-'. ]{2,30}$/;
        return nameRegEx.test(value);
      },
      validationErrorMessage:
        "Name should be 2-30 characters long, containing only letters, hyphens, apostrophes, or spaces.",
      obligatory: true,
    },
    lastname: {
      validated: (value) => {
        const lastnameRegEx = /^[a-zA-Z\-'. ]{2,30}$/;
        return lastnameRegEx.test(value);
      },
      validationErrorMessage:
        "Last name should be 2-30 characters long, containing only letters, hyphens, apostrophes, or spaces.",
      obligatory: true,
    },
    email: {
      validated: (value) => {
        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegEx.test(value);
      },
      validationErrorMessage: "Please enter a valid email address",
      obligatory: true,
    },
    phone: {
      validated: (value) => {
        const phoneRegEx =
          /^(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
        return phoneRegEx.test(value);
      },
      validationErrorMessage: "Please enter a valid phone number",
      obligatory: true,
    },
    password: {
      validated: (value) => {
        const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegEx.test(value);
      },
      validationErrorMessage:
        "Password must be at least 8 characters long, containing at least one letter and one number",
      obligatory: true,
    },
    formation: {
      validated: (value) => {
        const formationRegEx = /^[a-zA-Z\-'. ]{2,30}$/;
        return formationRegEx.test(value);
      },
      validationErrorMessage: "",
      obligatory: true,
    },
    message: {
      validated: (value) => {
        return true;
      },
      validationErrorMessage: "",
      obligatory: false,
    },
  };
  const FormVerification = () => {
    return !Object.entries(validationSchema).some(
      ([key, value]) => !value.validated(formInputData[key])
    );
  };

  return (
    <div className="contact-form-component">
      <div className="contact-form-container">
        <div className="contact-form-wrapper">
          <div className="name-lastname">
            <InputField
              InameId={"name"}
              Ilabel={"Name "}
              Itype={"text"}
              Iwidth={"210px"}
              Iheight={"50px"}
              handleFormInputChange={handleFormInputChange}
              Validation={validationSchema.name}
              value={formInputData.name}
            />
            <InputField
              InameId={"lastname"}
              Ilabel={"Lastame "}
              Itype={"text"}
              Iwidth={"210px"}
              Iheight={"50px"}
              handleFormInputChange={handleFormInputChange}
              Validation={validationSchema.lastname}
              value={formInputData.lastname}
            />
          </div>
          <InputField
            InameId={"email"}
            Ilabel={"Email "}
            Itype={"email"}
            Iwidth={"460px"}
            Iheight={"50px"}
            handleFormInputChange={handleFormInputChange}
            Validation={validationSchema.email}
            value={formInputData.email}
          />
          <InputField
            InameId={"phone"}
            Ilabel={"Phone "}
            Itype={"text"}
            Iwidth={"460px"}
            Iheight={"50px"}
            handleFormInputChange={handleFormInputChange}
            Validation={validationSchema.phone}
            value={formInputData.phone}
          />
          <InputField
            InameId={"password"}
            Ilabel={"Password "}
            Itype={"password"}
            Iwidth={"460px"}
            Iheight={"50px"}
            handleFormInputChange={handleFormInputChange}
            Validation={validationSchema.password}
            value={formInputData.password}
          />
          <InputField
            InameId={"formation"}
            Ilabel={"Formation souhaitée  "}
            Itype={"text"}
            Iwidth={"460px"}
            Iheight={"50px"}
            Validation={validationSchema.formation}
            handleFormInputChange={handleFormInputChange}
            value={formInputData.formation}
          />
          <Textarea
            InameId={"message"}
            Ilabel={"Message "}
            Iwidth={"460px"}
            Validation={validationSchema.message}
            handleFormInputChange={handleFormInputChange}
            value={formInputData.message}
            Iheight={"auto"}
            Irows={"4"}
          />
          <button className="submit-button" disabled={!FormVerification()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
