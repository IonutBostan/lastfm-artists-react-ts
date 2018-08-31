import { combineReducers, Reducer } from "redux";
import { IArtistInfoResource, ITopTracksResource } from "../interfaces";
import { artistInfoResource, topTracksResource } from "./artist.reducer";
import { topArtistsResource } from "./geo.reducer";

export { getArtistInfoResource, getTopTracksResource } from "./artist.reducer";
export { getTopArtistsResource } from "./geo.reducer";

export interface IState {
  geo: any;
  artist: {
    topTracksResource: ITopTracksResource;
    artistInfoResource: IArtistInfoResource;
  };
}
export interface IAction {
  payload: any;
}

export const reducer: Reducer = combineReducers({
  geo: combineReducers({ topArtistsResource }),
  artist: combineReducers({ topTracksResource, artistInfoResource })
});
