import PropTypes from "prop-types";
import React from "react";
import "./ArtistBlock.css";

/**
 * ArtistBlock component with artist image, artist name and mouse over efect
 */
const ArtistBlock = ({ image, name, onClick }) => (
  <div className="artist-block align-middle" onClick={onClick}>
    <div className="artist-block-image">
      <img alt={name} src={image} />
      <span className="artist-name">{name}</span>
    </div>
  </div>
);

ArtistBlock.propTypes = {
  /** Image path for artist's photo */
  image: PropTypes.string.isRequired,
  /** Artist name */
  name: PropTypes.string.isRequired,
  /** onClick callback function */
  onClick: PropTypes.func
};

export default ArtistBlock;
