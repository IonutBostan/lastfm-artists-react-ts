import { shallow } from "enzyme";
import React from "react";
import AppHeader from "./AppHeader";

describe("AppHeader", () => {
  const component = shallow(<AppHeader>spain</AppHeader>);
  it("should contain spain string", () => {
    expect(component.text()).toBe("spain");
  });
});
