import PropTypes from "prop-types";
import React from "react";
import { ITrack } from "../../interfaces";
import "./Track.css";

/**
 * Track component with the rating and the name of the song and a popularity bar
 */
const Track: React.SFC<ITrack> = ({ name, rank, popularity }) => (
  <div className="track">
    <div className="popularity" style={{ width: 343 * popularity }}>
      <span>
        {rank} {name}
      </span>
    </div>
  </div>
);

Track.propTypes = {
  /** Track name */
  name: PropTypes.string.isRequired,
  /** Track rank */
  rank: PropTypes.string.isRequired,
  /** Track popularity from 0 to 1 calculated as currentSongListeners/firstSongListeners */
  popularity: PropTypes.number.isRequired
};

export default Track;
