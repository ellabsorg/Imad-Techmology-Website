import React from "react";
import ContactForm from "./ContactForm";
import "./formMapSection.css";

function FormMapSection() {
  return (
    <div className="form-map-section-component">
      <div className="form">
        <h1 className="form-map-section-title">&gt; Contact Rapide</h1>
        <ContactForm />
      </div>
      <div className="map">
        <h1 className="form-map-section-title">&gt; Localisation</h1>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.5971859136316!2d5.745788275506298!3d36.80420726747429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f25fe45c52015f%3A0x223a1d4cd98a87dd!2sEllabs!5e0!3m2!1sen!2sdz!4v1707675705909!5m2!1sen!2sdz"
          width="450"
          height="627"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default FormMapSection;
