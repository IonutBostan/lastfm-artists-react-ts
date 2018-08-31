import { shallow } from "enzyme";
import React from "react";
import ArtistBlock from "./ArtistBlock";

describe("ArtistBlock", () => {
  const component = shallow(
    <ArtistBlock
      name="David Bowie"
      image="https://lastfm-img2.akamaized.net/i/u/300x300/537b95bcec2b4121977858bb88f36974.png"
    />
  );
  it("should contain the artist name", () => {
    expect(component.text()).toBe("David Bowie");
  });
  it("should contain an image", () => {
    expect(component.find("img").length).toBe(1);
  });
  it("should contain an image with src", () => {
    expect(component.find("img").props().src).toBe(
      "https://lastfm-img2.akamaized.net/i/u/300x300/537b95bcec2b4121977858bb88f36974.png"
    );
  });
});
