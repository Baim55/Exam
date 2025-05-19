import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>The page you are looking for was not found...</p>
      <Link to="/" className="not-link">
        Return to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
