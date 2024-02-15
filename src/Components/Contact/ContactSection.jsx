import React from "react";
import "./contact-section.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactSection() {
  return (
    <div className="contact-section-container">
      <div className="contact-section-wrapper">
        <div className="contact-form-left-side">
          <h1>Contactez-nous</h1>
          <ContactForm />
        </div>
        <div className="contact-info-right-side">
          <h1>Notre siege social</h1>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
