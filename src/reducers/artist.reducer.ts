import { combineReducers, Reducer } from "redux";
import { IAction, IState } from ".";
import { c } from "../constants";
import {
  IArtistInfo,
  IArtistInfoResource,
  ITopTracksResource,
  ITrack
} from "../interfaces";
import { createReducer, errorReducer, isFetchingReducer } from "./reducerUtils";

const resource = "ARTIST_INFO";

const formatArtistsInfoObject = (artist: any): IArtistInfo | null => {
  if (!artist) {
    return null;
  }

  return {
    name: artist.name,
    bio: artist.bio && artist.bio.summary
  };
};

const formatTopTracks = (tracks: any): ITrack[] => {
  const maxPlaycount = tracks.track[0].listeners;
  return tracks.track.map(
    (track: any): any => ({
      name: track.name,
      rank: Number(track["@attr"].rank),
      popularity: track.listeners / maxPlaycount
    })
  );
};

export const artistInfoResource: Reducer = combineReducers({
  artistInfo: createReducer(null, {
    [c.ARTIST_INFO_REQUEST]: () => null,
    [c.ARTIST_INFO_SUCCESS]: (_: any, action: IAction): IArtistInfo | null => {
      try {
        return formatArtistsInfoObject(action.payload.artist);
      } catch (error) {
        // console.log(
        //   "artistInfoResource ARTIST_INFO_SUCCESS " + error.toString()
        // );
        return null;
      }
    }
  }),

  isFetching: isFetchingReducer(c, resource),
  error: errorReducer(c, resource)
});

export const topTracksResource: Reducer = combineReducers({
  topTracks: createReducer([], {
    [c.TOP_TRACKS_REQUEST]: () => [],
    [c.TOP_TRACKS_SUCCESS]: (_: any, action: IAction): ITrack[] => {
      try {
        return formatTopTracks(action.payload.toptracks);
      } catch (error) {
        // console.log("topTracksResource TOP_TRACKS_SUCCESS " + error.toString());
        return [];
      }
    }
  }),

  isFetching: isFetchingReducer(c, resource),
  error: errorReducer(c, resource)
});

// metodos
export const getArtistInfoResource = (state: IState): IArtistInfoResource =>
  state.artist.artistInfoResource;
export const getTopTracksResource = (state: IState): ITopTracksResource =>
  state.artist.topTracksResource;
