import { shallow } from "enzyme";
import React from "react";
import Link from "./Link";

describe("Link", () => {
  const component = shallow(<Link>France</Link>);
  it("should contain the Link text", () => {
    expect(component.text()).toBe("France");
  });
});
