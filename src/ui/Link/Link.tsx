import PropTypes from "prop-types";
import React from "react";
import { IClickable } from "../../interfaces";
import "./Link.css";

/**
 * Component for links
 */
const Link: React.SFC<{ children: string } & IClickable> = ({
  children,
  ...props
}) => (
  <a {...props} className="header-link">
    {children}
  </a>
);

Link.propTypes = {
  /** Link's text */
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
