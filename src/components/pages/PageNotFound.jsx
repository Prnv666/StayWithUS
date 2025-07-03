import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-light">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-4 text-dark">Oops! The page you're looking for doesn't exist.</p>
      <p className="text-muted mb-4">It might have been moved or deleted.</p>
      <Link to="/" className="btn btn-outline-primary px-4 py-2 rounded-pill shadow">
        ⬅️ Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
