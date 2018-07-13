import React from "react";
import { shallow } from "enzyme";
import OwnedBusinesses from "../OwnedBusinesses";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import mockAxios from "axios";

describe("These are tests for the businesses info page ", () => {
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
      <OwnedBusinesses {...props} />
    </MemoryRouter>
  );
  component = wrapper.find(OwnedBusinesses).dive();

  let mountedOwnedBusiness;
  beforeEach(() => {
    mountedOwnedBusiness = shallow(<OwnedBusinesses {...props} />);
  });

  it("renders without crashing", () => {
    shallow(<OwnedBusinesses {...props} />);
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

  it("handles input changed", () => {
    mountedOwnedBusiness.instance().handleChange(event);
  });

  it("handles input reset", () => {
    mountedOwnedBusiness.instance().handleReset(event);
  });

  it("handles delete", () => {
    mountedOwnedBusiness.instance().deleteBusiness(event);
    mockAxios.delete.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          message: "Successfully deleted business business 1"
        }
      })
    );
  });

  it("handles show", () => {
    mountedOwnedBusiness.instance().handleShow(event);
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          business_info: {
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
        }
      })
    );
  });

  it("handles submit", () => {
    mountedOwnedBusiness.instance().handleSubmit(event);
    let spy = jest.spyOn(component.instance(), "handleSubmit");
    component
      .find('input[name="name"]')
      .simulate("change", { target: { value: "business 1 change" } });
    component
      .find('input[name="location"]')
      .simulate("change", { target: { value: "location 1 change" } });
    component
      .find('input[name="category"]')
      .simulate("change", { target: { value: "category 1 change" } });
    component
      .find('textarea[name="description"]')
      .simulate("change", { target: { value: "description change" } });
    component.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(spy).toHaveBeenCalled();
  });

  it("has a dashboard", () => {
    const dashboards = mountedOwnedBusiness.find("DashboardNavigation");
    expect(dashboards.length).toBe(1);
  });

  it("has a div", () => {
    const divs = mountedOwnedBusiness.find("div");
    expect(divs.length).toBe(13);
  });

  it("has a table", () => {
    const tables = mountedOwnedBusiness.find("Table");
    expect(tables.length).toBe(1);
  });

  it("has an h3", () => {
    const h3s = mountedOwnedBusiness.find("h3");
    expect(h3s.length).toBe(1);
  });

  it("has a b", () => {
    const bs = mountedOwnedBusiness.find("b");
    expect(bs.length).toBe(1);
  });

  it("has a table head", () => {
    const theads = mountedOwnedBusiness.find("thead");
    expect(theads.length).toBe(1);
  });

  it("has a table body", () => {
    const tbodys = mountedOwnedBusiness.find("tbody");
    expect(tbodys.length).toBe(1);
  });

  it("has a Modal", () => {
    const modals = mountedOwnedBusiness.find("Modal");
    expect(modals.length).toBe(1);
  });

  it("has a form", () => {
    const forms = mountedOwnedBusiness.find("form");
    expect(forms.length).toBe(1);
  });

  it("has pagination", () => {
    const pagination = mountedOwnedBusiness.find("Pagination");
    expect(pagination.length).toBe(1);
  });

  it("has a table head", () => {
    const table_head = mountedOwnedBusiness.find("thead");
    expect(table_head.length).toBe(1);
  });

  it("has a table body", () => {
    const table_body = mountedOwnedBusiness.find("tbody");
    expect(table_body.length).toBe(1);
  });
});
