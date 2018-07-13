import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";

describe("These are tests for the login link in navigation", () => {
  const event = {
    target: {
      value: {}
    },
    preventDefault: () => {}
  };
  let mountedLogin;
  it("renders without crashing", () => {
    mountedLogin = shallow(<Login />);
  });

  it("has lists", () => {
    const li_s = mountedLogin.find("li");
    expect(li_s.length).toBe(1);
  });

  it("has links", () => {
    const links = mountedLogin.find("Link");
    expect(links.length).toBe(1);
  });

  it("has b_s", () => {
    const b_s = mountedLogin.find("b");
    expect(b_s.length).toBe(1);
  });

  it("has i_s", () => {
    const i_s = mountedLogin.find("i");
    expect(i_s.length).toBe(1);
  });
});
