import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

class Search extends React.Component {
  constructor() {
    super();
    this.state = { search: "", filter_type: "", filter_value: "" };
  }

  static contextTypes = {
    router: PropTypes.object
  };

  handleChange = event => {
    // handles change of state on input change
    this.setState({ [event.target.id]: event.target.value });
  };

  formSubmit = event => {
    // handles submit of the search
    event.preventDefault();
    const search_query =
      "/search/" +
      this.state.search +
      "/" +
      this.state.filter_type +
      "/" +
      this.state.filter_value;
    this.context.router.history.push(search_query);
    this.setState({ search: "", filter_type: "", filter_value: "" });
  };

  render() {
    return (
      // JSX returned
      <li>
        <form className="navbar-form" onSubmit={this.formSubmit}>
          <div className="form-group">
            <select
              id="filter_type"
              name="filter_type"
              value={this.state.filter_type}
              className="form-control"
              onChange={this.handleChange}
            >
              <option value="">Filter by</option>
              <option value="location">Location</option>
              <option value="category">Category</option>
            </select>|
          </div>
          <div className="form-group">
            <input
              type="text"
              id="filter_value"
              name="filter_value"
              value={this.state.filter_value}
              onChange={this.handleChange}
              className="form-control"
              placeholder="filter value"
            />|
          </div>
          <div className="form-group">
            <input
              type="text"
              name="search"
              id="search"
              value={this.state.search}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Search"
              required="required"
            />|
          </div>
          <Button bsStyle="info" type="submit" className="btn btn-default">
            <i className="glyphicon glyphicon-search" type="submit" />
          </Button>
        </form>
      </li>
    );
  }
}
export default Search;
