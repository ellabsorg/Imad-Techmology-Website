import React, { useState } from "react";
import "./contactForm.css";
import InputField from "../shared/InputField";
import Textarea from "../shared/Textarea";
import SelectOption from "./SelectOption";

function ContactForm() {
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
    vousEtes: {
      validated: (value) => {
        return true;
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
  const [formInputData, setFormInputData] = useState({
    vousEtes: "particulier",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputData((prev) => ({ ...prev, [name]: value }));
  };
  console.log("FORM DATA = ", formInputData);
  const FormVerification = () => {
    return !Object.entries(validationSchema).some(
      ([key, value]) => !value.validated(formInputData[key])
    );
  };
  return (
    <div>
      <SelectOption handleFormInputChange={handleFormInputChange} />
      <div className="single-line">
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
          InameId={"phone"}
          Ilabel={"Phone "}
          Itype={"text"}
          Iwidth={"210px"}
          Iheight={"50px"}
          handleFormInputChange={handleFormInputChange}
          Validation={validationSchema.phone}
          value={formInputData.phone}
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
      <Textarea
        InameId={"message"}
        Ilabel={"Message "}
        Iwidth={"460px"}
        Validation={validationSchema.message}
        handleFormInputChange={handleFormInputChange}
        value={formInputData.message}
        Iheight={"auto"}
        Irows={"8"}
      />

      <button className="submit-button" disabled={!FormVerification()}>
        Submit
      </button>
    </div>
  );
}

export default ContactForm;
