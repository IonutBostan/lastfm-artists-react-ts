import { c } from "../constants";
import { artistInfoResource, topTracksResource } from "./artist.reducer";

describe("artistInfoResource", () => {
  it("should return null when called with REQUEST action type", () => {
    const action = {
      type: c.ARTIST_INFO_REQUEST,
      payload: { artist: { name: "David Bowie" } }
    };
    expect(artistInfoResource({}, action)).toEqual(
      expect.objectContaining({
        artistInfo: null
      })
    );
  });

  it("should return the received object when called with SUCCESS action type", () => {
    const action = {
      type: c.ARTIST_INFO_SUCCESS,
      payload: { artist: { name: "David Bowie", bio: { summary: "Test bio" } } }
    };
    expect(
      artistInfoResource({ artistInfo: { name: "David" } }, action)
    ).toEqual(
      expect.objectContaining({
        artistInfo: { name: "David Bowie", bio: "Test bio" }
      })
    );
  });

  it("should return a null object when called with SUCCESS action type and artist null", () => {
    const action = {
      type: c.ARTIST_INFO_SUCCESS,
      payload: { artist: null }
    };
    expect(
      artistInfoResource({ artistInfo: { name: "David" } }, action)
    ).toEqual(
      expect.objectContaining({
        artistInfo: {}
      })
    );
  });

  it("should return null when called with SUCCESS action type and malformatted response", () => {
    const action = {
      type: c.ARTIST_INFO_SUCCESS,
      payload: null
    };
    expect(artistInfoResource([], action)).toEqual(
      expect.objectContaining({
        artistInfo: {}
      })
    );
  });

  it("should return the initial state when called with FAILURE action type", () => {
    const action = {
      type: c.ARTIST_INFO_FAILURE,
      payload: { artist: { name: "David Bowie" } }
    };
    expect(
      artistInfoResource({ artistInfo: { name: "David" } }, action)
    ).toEqual(
      expect.objectContaining({
        artistInfo: { name: "David" }
      })
    );
  });
});

describe("topTracksResource", () => {
  it("should return empty array when called with REQUEST action type", () => {
    const action = {
      type: c.TOP_TRACKS_REQUEST,
      payload: { toptracks: { track: [{ name: "Ziggy Stardust" }] } }
    };
    expect(topTracksResource([], action)).toEqual(
      expect.objectContaining({
        topTracks: []
      })
    );
  });
  it("should return empty array when called with SUCCESS action type and malformatted response", () => {
    const action = {
      type: c.TOP_TRACKS_SUCCESS,
      payload: { tracks: [{ name: "Ziggy Stardust" }] }
    };
    expect(topTracksResource([], action)).toEqual(
      expect.objectContaining({
        topTracks: []
      })
    );
  });
  it("should return the top tracks when called with SUCCESS action type good response", () => {
    const action = {
      type: c.TOP_TRACKS_SUCCESS,
      payload: {
        toptracks: {
          track: [
            {
              name: "Ziggy Stardust",
              listeners: "722819",
              "@attr": {
                rank: "1"
              }
            }
          ]
        }
      }
    };
    expect(topTracksResource([], action)).toEqual(
      expect.objectContaining({
        topTracks: [{ name: "Ziggy Stardust", popularity: 1, rank: 1 }]
      })
    );
  });
});
