import React from "react";
import { shallow } from "enzyme";
import Businesses from "../Businesses";
import { MemoryRouter } from "react-router-dom";
import mockAxios from "axios";

describe("These are tests for the businesses page ", () => {
  const props = {};
  const event = {
    target: {
      value: {}
    },
    preventDefault: () => {}
  };
  let wrapper, component;
  wrapper = shallow(
    <MemoryRouter>
      <Businesses />
    </MemoryRouter>
  );
  component = wrapper.find(Businesses).dive();

  let mountedBusinesses;
  beforeEach(() => {
    mountedBusinesses = shallow(<Businesses />);
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          results: {
            businesses: [
              {
                category: "Information Technology",
                created_by: "admin",
                date_created: "Tue, 10 Jul 2018 12:27:46 GMT",
                description: "business 1 description",
                id: 1,
                last_modified: "Tue, 10 Jul 2018 12:27:46 GMT",
                location: "Kampala",
                name: "business 1",
                user_id: 1
              }
            ]
          }
        }
      })
    );
  });

  it("renders without crashing", () => {
    mountedBusinesses;
  });

  it("component did mount", () => {
    mountedBusinesses.instance().componentDidMount();
  });

  it("has a dashboard", () => {
    const dashboards = mountedBusinesses.find("DashboardNavigation");
    expect(dashboards.length).toBe(1);
  });

  it("has a businessTable", () => {
    const business_tables = mountedBusinesses.find("BusinessTable");
    expect(business_tables.length).toBe(1);
  });


  it("has divs", () => {
    const divs = mountedBusinesses.find("div");
    expect(divs.length).toBe(3);
  });

  it("has h3", () => {
    const h3s = mountedBusinesses.find("h3");
    expect(h3s.length).toBe(1);
  });

  it("has b", () => {
    const bs = mountedBusinesses.find("b");
    expect(bs.length).toBe(1);
  });

});
