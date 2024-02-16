import React from "react";
import "./pageNotFound.css";
import { Link } from "react-router-dom";
import NotFoundImage from "../../Assets/Page-not-found.png";
function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="not-found-div">
        <img src={NotFoundImage} alt="" />
      </div>
      <Link to={"/"}>
        <div className="go-back-button">
          <span></span>GO BACK
        </div>
      </Link>
    </div>
  );
}

export default PageNotFound;
