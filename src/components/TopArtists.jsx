import React from "react";
import { ArtistBlock } from "../ui";

class TopArtists extends React.PureComponent {
  render() {
    const { data, onArtistClick } = this.props;
    if (!data || data.constructor !== Array) { return null; }

    const artists = data.map(artist => (
      <ArtistBlock
        key={artist.mbid}
        {...artist}
        onClick={() => onArtistClick(artist.mbid)}
      />
    ));

    return <div className="flex-wrap">{artists}</div>;
  }
}

export default TopArtists;
