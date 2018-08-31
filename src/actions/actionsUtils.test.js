import * as utils from "./actionsUtils";

const mbid = "5441c29d-3602-4898-b1a1-b77fa23b8e50";
describe("getApiUrl", () => {
  it("should return a string", () => {
    expect(utils.getApiKey()).toBeTruthy();
  });
});

describe("getApiUrl", () => {
  it("should return a string", () => {
    expect(utils.getApiUrl()).toBeTruthy();
  });
});

describe("getResourceByMbid", () => {
  it("should contain mbid", () => {
    expect(utils.getResourceByMbid(mbid, "artist.getinfo")).toContain(
      "mbid=5441c29d-3602-4898-b1a1-b77fa23b8e50"
    );
  });
  it("should contain the method", () => {
    expect(utils.getResourceByMbid(mbid, "artist.getinfo")).toContain(
      "method=artist.getinfo"
    );
  });
});

describe("getResourceByCountry", () => {
  it("should contain mbid", () => {
    expect(utils.getResourceByCountry("spain", "geo.gettopartists")).toContain(
      "country=spain"
    );
  });
  it("should contain the method", () => {
    expect(utils.getResourceByCountry("spain", "geo.gettopartists")).toContain(
      "method=geo.gettopartists"
    );
  });
});
