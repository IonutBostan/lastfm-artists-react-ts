import cn from "classnames";
import React from "react";
import { connect } from "react-redux";
import { getArtistInfo, getTopTracks } from "../actions/artist.actions";
import { getTopArtists } from "../actions/geo.actions";
import Menu from "../components/Menu";
import TopArtists from "../components/TopArtists";
import { history } from "../history";
import {
  getArtistInfoResource,
  getTopArtistsResource,
  getTopTracksResource
} from "../reducers";
import { AppHeader, ArtistDetails } from "../ui";

const countries = [
  { name: "Spain", id: "spain" },
  { name: "France", id: "france" },
  { name: "Italy", id: "italy" },
  { name: "Germany", id: "germany" }
];

class Landing extends React.Component {
  state = { details: false, country: null };

  static getDerivedStateFromProps(props, state) {
    let { country } = props.match.params;

    if (state.country !== country) {
      props.getTopArtists(country);
    }

    return { ...state, country: country };
  }

  onMenuClick(country) {
    history.push("/" + country);
  }

  onArtistClick(mbid) {
    this.props.getArtistInfo(mbid);
    this.props.getTopTracks(mbid);
    this.setState({ ...this.state, details: true });
  }

  onModalClose() {
    this.setState({ ...this.state, details: false });
  }

  render() {
    let { country } = this.props.match.params;
    let {
      topArtistsResource,
      topTracksResource,
      artistInfoResource
    } = this.props;
    let { topArtists } = topArtistsResource;
    let { topTracks } = topTracksResource;
    let { artistInfo } = artistInfoResource;

    return (
      <div>
        <div
          className={cn("container landing-container", {
            blur: this.state.details
          })}
        >
          <AppHeader>{country}</AppHeader>
          <Menu
            data={countries}
            active={country}
            onMenuClick={this.onMenuClick.bind(this)}
          />
          <TopArtists
            data={topArtists}
            onArtistClick={this.onArtistClick.bind(this)}
          />
        </div>
        <div className="modal-container">
          <ArtistDetails
            active={this.state.details}
            {...artistInfo}
            tracks={topTracks}
            onClose={this.onModalClose.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
    topArtistsResource: getTopArtistsResource(store),
    topTracksResource: getTopTracksResource(store),
    artistInfoResource: getArtistInfoResource(store)
  }),
  { getTopArtists, getTopTracks, getArtistInfo }
)(Landing);
