import React from "react";
import { shallow } from "enzyme";
import SearchResults from "../SearchResults";
import mockAxios from "axios";

describe("These are tests for the search form ", () => {
  const props = {
    match: {
      params: {}
    }
  };
  const event = {
    target: {
      value: {}
    },
    preventDefault: () => {}
  };

  let mountedSearchResults;
  beforeEach(() => {
    mountedSearchResults = shallow(
      <SearchResults
        {...props}
        history={{
          push: () => {}
        }}
      />
    );
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          results: {
            searched_businesses: [
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
    shallow(<SearchResults {...props} />);
  });

  it("handles show reviews", () => {
    mountedSearchResults.instance().showReviews(event);
  });

  it("has a dashboard", () => {
    const dashboards = mountedSearchResults.find("DashboardNavigation");
    expect(dashboards.length).toBe(1);
  });

  it("has a table", () => {
    const tables = mountedSearchResults.find("Table");
    expect(tables.length).toBe(1);
  });

  it("has a div", () => {
    const divs = mountedSearchResults.find("div");
    expect(divs.length).toBe(6);
  });

  it("has a table head", () => {
    const tableheads = mountedSearchResults.find("thead");
    expect(tableheads.length).toBe(1);
  });

  it("has a table body", () => {
    const tablebody = mountedSearchResults.find("tbody");
    expect(tablebody.length).toBe(1);
  });

  it("has an h3", () => {
    const h3s = mountedSearchResults.find("h3");
    expect(h3s.length).toBe(1);
  });

  it("has a b", () => {
    const bs = mountedSearchResults.find("b");
    expect(bs.length).toBe(1);
  });
});
