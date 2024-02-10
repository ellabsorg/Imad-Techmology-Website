import React from "react";
import "./contactLocalisation.css";
import cap from "../../Assets/captcha.png";

function ContactLocalisation() {
  return (
    <div>
      <div className="contact-localisation-container">
        <div className="contact-localisation-wrapper">
          <div className="contact-container">
            <h1 className="header"> &gt; Contact Rapide</h1>
            <form className="contact-form">
              <div className="half-line-groupe">
                <div className="name-wrapper">
                  <label htmlFor="name">Name </label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="username-wrapper">
                  <label htmlFor="username">Username </label>
                  <input type="text" name="username" id="username" />
                </div>
              </div>
              <div className="full-line-groupe">
                <div className="email-wrapper full-line-groupe-element">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="phone-wrapper full-line-groupe-element">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" name="phone" id="phone" />
                </div>
                <div className="formation-wrapper full-line-groupe-element">
                  <label htmlFor="formation">Formation souhaitée</label>
                  <input type="text" name="formation" id="formation" />
                </div>
                <div className="message-wrapper full-line-groupe-element">
                  <label htmlFor="formation">Message</label>
                  <textarea type="text" name="message" id="message" rows="5" />
                </div>
              </div>
              <img
                src={cap}
                style={{ width: "300px" }}
                onClick={() => alert("HAHAHAHAHAHAHAHAHAHAHAHAHA")}
              />
              <div className="submit-button">Envoyer</div>
            </form>
          </div>
          <div className="localisation-container">
            <h1 className="header"> &gt; Localisation</h1>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.597185913632!2d5.745788275506291!3d36.80420726747428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f25fe45c52015f%3A0x223a1d4cd98a87dd!2sEllabs!5e0!3m2!1sfr!2sdz!4v1707170386539!5m2!1sfr!2sdz"
                width="100%"
                height="600"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactLocalisation;
