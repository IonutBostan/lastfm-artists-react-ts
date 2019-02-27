import cn from "classnames";
import React from "react";
import { connect } from "react-redux";
import { getArtistInfo, getTopTracks } from "../actions/artist.actions";
import { getTopArtists } from "../actions/geo.actions";
import Menu from "../components/Menu";
import TopArtists from "../components/TopArtists";
import { history } from "../history";
import { IArtistInfoResource } from "../interfaces";
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
interface ILandingProps {
  getArtistInfo: (mbid: string) => void;
  getTopTracks: (mbid: string) => void;
  topArtistsResource: any;
  topTracksResource: any;
  artistInfoResource: IArtistInfoResource;
  match: any;
}

interface ILandingState {
  details: boolean;
  country: string | null;
}



@(connect((store: any) => ({
  topArtistsResource: getTopArtistsResource(store),
  topTracksResource: getTopTracksResource(store),
  artistInfoResource: getArtistInfoResource(store)
}),
{ getTopArtists, getTopTracks, getArtistInfo }) as any)
class Landing extends React.Component<ILandingProps, ILandingState> {
  public static getDerivedStateFromProps(props: any, state: any) {
    const { country } = props.match.params;

    if (state.country !== country) {
      props.getTopArtists(country);
    }

    return { ...state, country };
  }
  public constructor(props: ILandingProps) {
    super(props);
    this.state = { details: false, country: null };
    this.onMenuClick = this.onMenuClick.bind(this);
    this.onArtistClick = this.onArtistClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  public render() {
    const { country } = this.props.match.params;
    const {
      topArtistsResource,
      topTracksResource,
      artistInfoResource
    } = this.props;
    const { topArtists } = topArtistsResource;
    const { topTracks } = topTracksResource;
    const { artistInfo } = artistInfoResource;

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
            onMenuClick={this.onMenuClick}
          />
          <TopArtists data={topArtists} onArtistClick={this.onArtistClick} />
        </div>
        <div className="modal-container">
          <ArtistDetails
            active={this.state.details}
            {...artistInfo}
            tracks={topTracks}
            onClose={this.onModalClose}
          />
        </div>
      </div>
    );
  }
  private onMenuClick(country: string) {
    history.push("/" + country);
  }

  private onArtistClick(mbid: string) {
    this.props.getArtistInfo(mbid);
    this.props.getTopTracks(mbid);
    this.setState({ ...this.state, details: true });
  }

  private onModalClose() {
    this.setState({ ...this.state, details: false });
  }
}

export default Landing;

// export default connect(
//   (store: any) => ({
//     topArtistsResource: getTopArtistsResource(store),
//     topTracksResource: getTopTracksResource(store),
//     artistInfoResource: getArtistInfoResource(store)
//   }),
//   { getTopArtists, getTopTracks, getArtistInfo }
// )(Landing);
