import React from "react";
import { shallow } from "enzyme";
import CreateBusiness from "../CreateBusiness";
import { MemoryRouter } from "react-router-dom";
import mockAxios from "axios";

describe("These are tests for create business form ", () => {
  let wrapper, component;
  wrapper = shallow(
    <MemoryRouter>
      <CreateBusiness history={{ replace: () => {} }} />
    </MemoryRouter>
  );
  component = wrapper.find(CreateBusiness).dive();

  const props = {
    history: {
      push: event => {},
      replace: event => {}
    }
  };
  const event = {
    target: {
      value: {}
    },
    preventDefault: () => {}
  };

  let mountedCreateBusiness;
  beforeEach(() => {
    mountedCreateBusiness = shallow(<CreateBusiness />);
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          message: "Business business 4 successfully created"
        }
      })
    );
  });

  it("handles input changed", () => {
    mountedCreateBusiness.instance().handleChange(event);
  });

  it("handles input reset", () => {
    mountedCreateBusiness.instance().handleReset(event);
  });

  it("handles form submit", () => {
    let spy = jest.spyOn(component.instance(), "formSubmit");
    component
      .find('input[name="name"]')
      .simulate("change", { target: { value: "business 1" } });
    component
      .find('input[name="location"]')
      .simulate("change", { target: { value: "location 1" } });
    component
      .find('input[name="category"]')
      .simulate("change", { target: { value: "category 1" } });
    component
      .find('textarea[name="description"]')
      .simulate("change", { target: { value: "description" } });
    component.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(spy).toHaveBeenCalled();
  });

  it("has a b", () => {
    const bs = mountedCreateBusiness.find("b");
    expect(bs.length).toBe(1);
  });

  it("has a form", () => {
    const forms = mountedCreateBusiness.find("form");
    expect(forms.length).toBe(1);
  });

  it("has a dashboard navigation", () => {
    const navigations = mountedCreateBusiness.find("DashboardNavigation");
    expect(navigations.length).toBe(1);
  });

  it("has a i_s", () => {
    const i_s = mountedCreateBusiness.find("i");
    expect(i_s.length).toBe(2);
  });

  it("has a textarea", () => {
    const textareas = mountedCreateBusiness.find("textarea");
    expect(textareas.length).toBe(1);
  });

  it("has inputs", () => {
    const inputs = mountedCreateBusiness.find("input");
    expect(inputs.length).toBe(3);
  });

  it("has divs", () => {
    const divs = mountedCreateBusiness.find("div");
    expect(divs.length).toBe(11);
  });
});
