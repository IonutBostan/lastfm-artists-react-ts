import { combineReducers } from "redux";
import { artistInfoResource, topTracksResource } from "./artist.reducer";
import { topArtistsResource } from "./geo.reducer";

export { getArtistInfoResource, getTopTracksResource } from "./artist.reducer";
export { getTopArtistsResource } from "./geo.reducer";

export const reducer = combineReducers({
  geo: combineReducers({ topArtistsResource }),
  artist: combineReducers({ topTracksResource, artistInfoResource })
});
