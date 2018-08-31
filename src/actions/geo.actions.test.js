import { getTopArtists } from "./geo.actions";

const country = "spain";
describe("getTopArtistsUrl", () => {
  it("the redux standard action should contain the country ", () => {
    expect(JSON.stringify(getTopArtists(country))).toContain(country);
  });
  it("the redux standard action should geo.gettopartists ", () => {
    expect(JSON.stringify(getTopArtists(country))).toContain(
      "geo.gettopartists"
    );
  });
});
