import React from "react";
import { IArtist } from "../interfaces";
import { ArtistBlock } from "../ui";

interface ITopArtistsProps {
  data: IArtist[];
  onArtistClick: any;
}

class TopArtists extends React.PureComponent<ITopArtistsProps, {}> {
  public render() {
    const { data } = this.props;
    if (!data || data.constructor !== Array) {
      return null;
    }

    const artists = data.map(artist => (
      <ArtistBlock
        key={artist.mbid}
        {...artist}
        onClick={this.onArtistClick.bind(this, artist.mbid)}
      />
    ));

    return <div className="flex-wrap">{artists}</div>;
  }
  private onArtistClick(mbid: string): void {
    this.props.onArtistClick(mbid);
  }
}

export default TopArtists;
