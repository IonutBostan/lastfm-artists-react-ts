import PropTypes from "prop-types";
import React from "react";
import "./Link.css";

/**
 * Component for links
 */
const Link = ({ children, ...props }) => (
  <a {...props} className="header-link">
    {children}
  </a>
);

Link.propTypes = {
  /** Link's text */
  children: PropTypes.string.isRequired
};

export default Link;
