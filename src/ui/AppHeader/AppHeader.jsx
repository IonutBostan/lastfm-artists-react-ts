import PropTypes from "prop-types";
import React from "react";
import "./AppHeader.css";

/**
 * Header component for country name
 */
const AppHeader = ({ children }) => <h1 className="app-header">{children}</h1>;

AppHeader.propTypes = {
  /** Country name */
  children: PropTypes.string.isRequired
};

export default AppHeader;
