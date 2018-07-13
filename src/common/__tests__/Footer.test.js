import React from "react";
import { shallow } from "enzyme";
import Footer from "../Footer";

describe("These are tests for the login form ", () => {
  const event = {
    target: {
      value: {}
    },
    preventDefault: () => {}
  };

  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it("has divs", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("div").length).toBe(1);
  });

  it("has paragraphs", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("p").length).toBe(1);
  });

  it("has small size paragraphs", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("small").length).toBe(1);
  });
});
