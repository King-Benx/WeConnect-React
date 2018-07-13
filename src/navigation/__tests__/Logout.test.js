import React from "react";
import { shallow } from "enzyme";
import Logout from "../Logout";

describe("These are tests the logout link", () => {
  let mountedLogoutLink;

  beforeEach(() => {
    mountedLogoutLink = shallow(<Logout />);
  });

  it("renders without crashing", () => {
    mountedLogoutLink = shallow(<Logout />);
  });

  it("has links", () => {
    const links = mountedLogoutLink.find("Link");
    expect(links.length).toBe(1);
  });

  it("has a list", () => {
    const lists = mountedLogoutLink.find("li");
    expect(lists.length).toBe(1);
  });
});
