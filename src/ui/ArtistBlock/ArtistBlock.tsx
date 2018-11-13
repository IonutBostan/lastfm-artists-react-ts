import PropTypes from "prop-types";
import React from "react";
import { IArtist, IClickable } from "../../interfaces";
import "./ArtistBlock.css";

/**
 * ArtistBlock component with artist image, artist name and mouse over efect
 */
const ArtistBlock: React.SFC<IArtist & IClickable> = ({
  image,
  name,
  onClick
}) => (
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
  onClick: PropTypes.func.isRequired,
  mbid: PropTypes.string.isRequired
};

export default ArtistBlock;
