import React from "react";

function MapSection() {
  return (
    <section className="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204580.26640794458!2d3.153365353666671!3d36.756971259673804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e5305531cebfb%3A0x748f95878587df15!2zVGVjaG1vbG9neSDYqtmK2YPZhdmI2YTZiNis2YrYpw!5e0!3m2!1sfr!2sdz!4v1708032811637!5m2!1sfr!2sdz&z=10"
        width="90%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default MapSection;
