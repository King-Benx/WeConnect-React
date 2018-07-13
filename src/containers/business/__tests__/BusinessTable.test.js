import React from "react";
import { shallow } from "enzyme";
import BusinessTable from "../BusinessTable";

describe("These are tests for the businesses info page ", () => {
  const props = {
  };
  let mountedBusinessTable;
  it("renders without crashing", () => {
    mountedBusinessTable = shallow(<BusinessTable {...props} />);
  });

  it("has divs", () => {
    const divs = mountedBusinessTable.find("div");
    expect(divs.length).toBe(5);
  });

  it("has a table", () => {
    const tables = mountedBusinessTable.find("Table");
    expect(tables.length).toBe(1);
  });

  it("has a table body", () => {
    const table_body = mountedBusinessTable.find("tbody");
    expect(table_body.length).toBe(1);
  });

  it("has pagination", () => {
    const pagination = mountedBusinessTable.find("Pagination");
    expect(pagination.length).toBe(1);
  });

  it("has a table head", () => {
    const table_head = mountedBusinessTable.find("thead");
    expect(table_head.length).toBe(1);
  });
});
