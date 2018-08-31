import { RSAA } from "redux-api-middleware";
import { c } from "../constants";
import { getResourceByMbid } from "./actionsUtils";

const getArtistInfoUrl = mbid => getResourceByMbid(mbid, "artist.getinfo");
const getTopTracksUrl = mbid =>
  getResourceByMbid(mbid, "artist.gettoptracks", 10);

export const getArtistInfo = mbid => {
  return {
    [RSAA]: {
      types: [
        c.ARTIST_INFO_REQUEST,
        c.ARTIST_INFO_SUCCESS,
        c.ARTIST_INFO_FAILURE
      ],
      endpoint: getArtistInfoUrl(mbid),
      method: "GET"
    }
  };
};

export const getTopTracks = mbid => {
  return {
    [RSAA]: {
      types: [c.TOP_TRACKS_REQUEST, c.TOP_TRACKS_SUCCESS, c.TOP_TRACKS_FAILURE],
      endpoint: getTopTracksUrl(mbid),
      method: "GET"
    }
  };
};
