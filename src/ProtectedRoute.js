import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";

  return isAuthenticated ? children : <Navigate to="/authentication/signin" />;
};

// Add prop validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a required node (React elements or text)
};

export default ProtectedRoute;
