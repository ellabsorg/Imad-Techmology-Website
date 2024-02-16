import React from "react";
import "./eventSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function EventSection({ eventData }) {
  return (
    <section className="event-section-container">
      {eventData.map((event, index) => (
        <div
          key={index}
          className={`event-section-wrapper ${index % 2 === 0 ? "flip" : ""}`}
        >
          <div className="event-left-side">
            <div className="event-info">
              <h2 className="event-title">{event.title}</h2>
              <div className="event-date-location">
                <div className="date">
                  <FontAwesomeIcon className="FaIcon" icon={faCalendarDays} />
                  {event.date}
                </div>
                <div className="location">
                  <FontAwesomeIcon className="FaIcon" icon={faLocationDot} />
                  {event.location}
                </div>
              </div>
            </div>
            <div className="event-discover-buttons">
              <Link to={event.discoverPath} target="_blank">
                <button className="discover-button">Discover</button>
              </Link>
              <div className="event-social-media">
                <Link to={event.facebookPath} target="_blank">
                  <FontAwesomeIcon className="FaIcon" icon={faFacebook} />
                </Link>
                <Link to={event.instagramPath} target="_blank">
                  <FontAwesomeIcon className="FaIcon" icon={faInstagram} />
                </Link>
              </div>
            </div>
            <div className="event-description">{event.description}</div>
            <div className="event-numbers">
              {event.numbers.map((number, index) => (
                <div key={index} className="participants event-stat">
                  <div className="number">{number.value}</div>
                  <div className="desc">{number.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="event-right-side">
            <img src={event.image} alt="" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default EventSection;
