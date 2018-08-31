import { combineReducers } from "redux";
import { c } from "../constants";
import { createReducer, errorReducer, isFetchingReducer } from "./reducerUtils";

const resource = "ARTIST_INFO";

const getImage = (images, size) =>
  images && images.filter(image => image.size === size).shift()["#text"];

const formatTopArtistsAray = topArtists => {
  return topArtists.artist.map(artist => ({
    name: artist.name,
    mbid: artist.mbid,
    image: getImage(artist.image, "extralarge")
  }));
};

export const topArtistsResource = combineReducers({
  topArtists: createReducer([], {
    [c.TOP_ARTISTS_SUCCESS]: (state, action) => {
      try {
        return formatTopArtistsAray(action.payload.topartists);
      } catch (error) {
        // console.log(
        //   "topArtistsResource TOP_ARTISTS_SUCCESS " + error.toString()
        // );
        return [];
      }
    }
  }),

  isFetching: isFetchingReducer(c, resource),
  error: errorReducer(c, resource)
});

//metodos
export const getTopArtistsResource = state => state.geo.topArtistsResource;
