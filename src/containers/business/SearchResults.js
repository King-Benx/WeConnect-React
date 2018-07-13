import React from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../custom/constants";
import CustomFunctions from "../../custom/CustomFunctions";
import DashboardNavigation from "../../navigation/DashboardNavigation";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all_businesses: [],
      q: props.match.params.search,
      filter_type: props.match.params.filter_type,
      filter_value: props.match.params.filter_value
    };
  }

  showReviews = event => {
    // handles redirect to the reviews of particular business
    this.props.history.push("/all_businesses/" + event.target.id + "/reviews");
  };

  componentDidMount() {
    // populates the table with search results
    axios
      .get(
        BASE_URL +
          "api/v1/businesses/search?q=" +
          this.state.q +
          "&filter_type=" +
          this.state.filter_type +
          "&filter_value=" +
          this.state.filter_value,
        {
          headers: {
            "x-access-token": CustomFunctions.getToken()
          }
        }
      )
      .then(res => {
          this.setState({
            all_businesses: res.data.results.searched_businesses
          });
      })
      .catch(err => {
        this.setState({
          all_businesses: []
        });
      });
  }

  async getSnapshotBeforeUpdate(prevProps, prevState) {
    // handles changes in the search query
    const prevSearchValue = prevProps.match.params.search;
    const currentSearchVale = this.props.match.params.search;
    const currentFilterValue = this.props.match.params.filter_value;
    const prevFilterValue = prevProps.match.params.filter_value;
    const currentFilterType = this.props.match.params.filter_type;
    const prevFilterType = prevProps.match.params.filter_type;
    try {
      if (
        currentSearchVale === prevSearchValue &&
        currentFilterValue === prevFilterValue &&
        currentFilterType === prevFilterType
      ) {
        return null;
      }
      const res = await axios.get(
        BASE_URL +
          "api/v1/businesses/search?q=" +
          this.props.match.params.search +
          "&filter_type=" +
          this.props.match.params.filter_type +
          "&filter_value=" +
          this.props.match.params.filter_value,
        {
          headers: {
            "x-access-token": CustomFunctions.getToken()
          }
        }
      );
      return {
        all_businesses: res.data.results.searched_businesses
      };
    } catch (err) {
      return null;
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    // handles update of the state
    const businesses = await snapshot;
    if (businesses) {
      this.setState({
        all_businesses: businesses.all_businesses
      });
    }
  }
  render() {
    const table_data = this.state.all_businesses.map(business => {
      return (
        <tr key={business.id.toString()}>
          <td> {business.date_created} </td> <td> {business.name} </td>
          <td> {business.location} </td> <td> {business.category} </td>
          <td> {business.description} </td>
          <td>
            <Button
              id={business.id}
              onClick={this.showReviews}
              bsStyle="info"
              block
            >
              <i
                className="glyphicon glyphicon-info-sign"
                id={business.id}
                onClick={this.showReviews}
              />
              View
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <div className="row">
        <DashboardNavigation />
        <div className="col-sm-9 content-wrapper">
          <div className="panel-heading">
            <h3 className="panel-title">
              <b> Search Results </b>
            </h3>
          </div>

          <div className="panel panel-default">
            <div className="panel-body">
              <div className="table-responsive">
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th> Date of Creation </th> <th> Name </th>
                      <th> Location </th> <th> Category </th>
                      <th> Description </th> <th> View </th>
                    </tr>
                  </thead>
                  <tbody> {table_data} </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchResults;
