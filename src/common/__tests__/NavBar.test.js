import React from "react";
import { shallow } from "enzyme";
import NavBar from "../NavBar";

describe("These are tests for the login form ", () => {
  const event = {
    target: {
      value: {}
    },
    preventDefault: () => {}
  };

  it("renders without crashing", () => {
    shallow(<NavBar />);
  });

  it("has a nav", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("nav").length).toBe(1);
  });

  it("has spans", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("span").length).toBe(4);
  });

  it("has divs", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("div").length).toBe(2);
  });

  it("has links", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("Link").length).toBe(1);
  });

  it("has button", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find("button").length).toBe(1);
  });
});
