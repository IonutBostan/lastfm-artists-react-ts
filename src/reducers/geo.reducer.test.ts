import { c } from "../constants";
import { topArtistsResource } from "./geo.reducer";

describe("topArtistsResource", () => {
  it("should return the initial state when called with REQUEST action type", () => {
    const action = {
      type: c.TOP_ARTISTS_REQUEST,
      payload: { data: { name: "David Bowie" } }
    };
    expect(topArtistsResource({}, action)).toEqual(
      expect.objectContaining({
        topArtists: []
      })
    );
    expect(
      topArtistsResource({ topArtists: { name: "David" } }, action)
    ).toEqual(
      expect.objectContaining({
        topArtists: { name: "David" }
      })
    );
  });

  it("should return the received object when called with SUCCESS action type", () => {
    const action = {
      type: c.TOP_ARTISTS_SUCCESS,
      payload: {
        topartists: {
          artist: [
            {
              name: "David Bowie",
              mbid: "5441c29d-3602-4898-b1a1-b77fa23b8e50",
              image: [
                {
                  "#text":
                    "https://lastfm-img2.akamaized.net/i/u/174s/aa9dfbdec965d751cd1fa4ec5a309299.png",
                  size: "large"
                },
                {
                  "#text":
                    "https://lastfm-img2.akamaized.net/i/u/300x300/aa9dfbdec965d751cd1fa4ec5a309299.png",
                  size: "extralarge"
                }
              ]
            }
          ]
        }
      }
    };
    expect(
      topArtistsResource({ topArtists: [{ name: "David" }] }, action)
    ).toEqual(
      expect.objectContaining({
        topArtists: [
          {
            image:
              "https://lastfm-img2.akamaized.net/i/u/300x300/aa9dfbdec965d751cd1fa4ec5a309299.png",
            mbid: "5441c29d-3602-4898-b1a1-b77fa23b8e50",
            name: "David Bowie"
          }
        ]
      })
    );
  });

  it("should return empty object when called with SUCCESS action type and malformatted response", () => {
    const action = {
      type: c.TOP_ARTISTS_SUCCESS,
      payload: { data: { artist: [{ name: "David Bowie" }] } }
    };
    expect(
      topArtistsResource({ topArtists: [{ name: "David" }] }, action)
    ).toEqual(
      expect.objectContaining({
        topArtists: []
      })
    );
  });

  it("should return the initial state when called with FAILURE action type", () => {
    const action = {
      type: c.TOP_ARTISTS_FAILURE,
      payload: { data: { name: "David Bowie" } }
    };
    expect(
      topArtistsResource({ topArtists: { name: "David" } }, action)
    ).toEqual(
      expect.objectContaining({
        topArtists: { name: "David" }
      })
    );
  });
});
