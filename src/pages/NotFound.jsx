import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mx-auto">
          <h3>
            Sorry...! Page not found. <Link rel="stylesheet" to="/" />
            Back to Home
          </h3>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
