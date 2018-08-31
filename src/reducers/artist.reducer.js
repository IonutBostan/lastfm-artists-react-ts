import { combineReducers } from "redux";
import { c } from "../constants";
import { createReducer, errorReducer, isFetchingReducer } from "./reducerUtils";

const resource = "ARTIST_INFO";

const formatArtistsInfoObject = artist => {
  if (!artist) {
    return {};
  }

  return {
    name: artist.name,
    bio: artist.bio && artist.bio.summary
  };
};

const formatTopTracks = tracks => {
  const maxPlaycount = tracks.track[0].listeners;
  return tracks.track.map(track => ({
    name: track.name,
    rank: Number(track["@attr"].rank),
    popularity: track.listeners / maxPlaycount
  }));
};

export const artistInfoResource = combineReducers({
  artistInfo: createReducer(
    {},
    {
      [c.ARTIST_INFO_REQUEST]: (state, action) => null,
      [c.ARTIST_INFO_SUCCESS]: (state, action) => {
        try {
          return formatArtistsInfoObject(action.payload.artist);
        } catch (error) {
          // console.log(
          //   "artistInfoResource ARTIST_INFO_SUCCESS " + error.toString()
          // );
          return {};
        }
      }
    }
  ),

  isFetching: isFetchingReducer(c, resource),
  error: errorReducer(c, resource)
});

export const topTracksResource = combineReducers({
  topTracks: createReducer([], {
    [c.TOP_TRACKS_REQUEST]: (state, action) => [],
    [c.TOP_TRACKS_SUCCESS]: (state, action) => {
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

//metodos
export const getArtistInfoResource = state => state.artist.artistInfoResource;
export const getTopTracksResource = state => state.artist.topTracksResource;
