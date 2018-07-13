import React from "react";
import { shallow } from "enzyme";
import ServerErrorPage from "../ServerErrorPage";

describe("These are tests the server error page", () => {
  const event = {
    target: {
      value: {}
    },
    preventDefault: () => {}
  };

  it("renders without crashing", () => {
    shallow(<ServerErrorPage />);
  });

  it("has a header", () => {
    const wrapper = shallow(<ServerErrorPage />);
    expect(wrapper.find("h1").length).toBe(1);
  });

  it("has ems", () => {
    const wrapper = shallow(<ServerErrorPage />);
    expect(wrapper.find("em").length).toBe(1);
  });

  it("has divs", () => {
    const wrapper = shallow(<ServerErrorPage />);
    expect(wrapper.find("div").length).toBe(3);
  });

  it("has links", () => {
    const wrapper = shallow(<ServerErrorPage />);
    expect(wrapper.find("Link").length).toBe(1);
  });

  it("has an h4", () => {
    const wrapper = shallow(<ServerErrorPage />);
    expect(wrapper.find("h4").length).toBe(1);
  });

  it("has an i tag", () => {
    const wrapper = shallow(<ServerErrorPage />);
    expect(wrapper.find("i").length).toBe(1);
  });
});
