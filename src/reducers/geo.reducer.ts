import { combineReducers, Reducer } from "redux";
import { IAction, IState } from ".";
import { c } from "../constants";
import { IArtist, ITopArtistsResource } from "../interfaces";
import { createReducer, errorReducer, isFetchingReducer } from "./reducerUtils";

const resource = "ARTIST_INFO";

const getImage = (images: any, size: string): string =>
  images && images.filter((image: any) => image.size === size).shift()["#text"];

const formatTopArtistsAray = (topArtists: any): IArtist[] => {
  return topArtists.artist.map((artist: any) => ({
    name: artist.name,
    mbid: artist.mbid,
    image: getImage(artist.image, "extralarge")
  }));
};

export const topArtistsResource: Reducer = combineReducers({
  topArtists: createReducer([], {
    [c.TOP_ARTISTS_SUCCESS]: (_: any, action: IAction): IArtist[] => {
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

// metodos
export const getTopArtistsResource = (state: IState): ITopArtistsResource =>
  state.geo.topArtistsResource;
