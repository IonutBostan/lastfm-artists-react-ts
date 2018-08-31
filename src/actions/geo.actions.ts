import { RSAA } from "redux-api-middleware";
import { c } from "../constants";
import { IRSAA } from "../interfaces";
import { getResourceByCountry } from "./actionsUtils";

const getTopArtistsUrl = (country: string): string =>
  getResourceByCountry(country, "geo.gettopartists", 12);

export const getTopArtists = (country: string): IRSAA => {
  return {
    [RSAA]: {
      types: [
        c.TOP_ARTISTS_REQUEST,
        c.TOP_ARTISTS_SUCCESS,
        c.TOP_ARTISTS_FAILURE
      ],
      endpoint: getTopArtistsUrl(country),
      method: "GET"
    }
  };
};
