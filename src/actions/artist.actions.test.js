import { getArtistInfo, getTopTracks } from "./artist.actions";

const mbid = "5441c29d-3602-4898-b1a1-b77fa23b8e50";
describe("getArtistInfo", () => {
  it("the redux standard action should contain mbid ", () => {
    expect(JSON.stringify(getArtistInfo(mbid))).toContain(mbid);
  });
  it("the redux standard action should artist.getinfo ", () => {
    expect(JSON.stringify(getArtistInfo(mbid))).toContain("artist.getinfo");
  });
});

describe("getTopTracks", () => {
  it("the redux standard action should contain mbid ", () => {
    expect(JSON.stringify(getTopTracks(mbid))).toContain(mbid);
  });
  it("the redux standard action should artist.gettoptracks ", () => {
    expect(JSON.stringify(getTopTracks(mbid))).toContain("artist.gettoptracks");
  });
});
