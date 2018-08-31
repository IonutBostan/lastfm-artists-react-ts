import { shallow } from "enzyme";
import React from "react";
import Track from "./Track";

describe("Track", () => {
  const component = shallow(
    <Track popularity={0.5} name="Ziggy Stardust" rank={1} />
  );
  it("should contain the Track text", () => {
    expect(component.text()).toBe("1 Ziggy Stardust");
  });
  it("should have the with equal with popularity*343", () => {
    expect(component.children().props().style.width).toBe(0.5 * 343);
  });
});
