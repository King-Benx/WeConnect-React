import React from "react";
import { Button, Table, Pagination } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../custom/constants";
import CustomFunctions from "../../custom/CustomFunctions";
import DashboardNavigation from "../../navigation/DashboardNavigation";

class Businesses extends React.Component {
  constructor() {
    super();
    this.state = {
      all_businesses: [],
      page_limit: "",
      limit: "",
      number_of_records: "",
      page_numbers: ""
    };
  }

  showReviews = event => {
    // redirects to reviews of a particular business
    this.props.history.push("/all_businesses/" + event.target.id + "/reviews");
  };

  componentDidMount() {
    // populates the business tables
    axios
      .get(
        BASE_URL +
          "api/v1/businesses?page=" +
          this.state.page +
          "&limit=" +
          this.state.page_limit,
        {
          headers: {
            "x-access-token": CustomFunctions.getToken()
          }
        }
      )
      .then(res => {
        if (res.status === 404) {
          this.setState({
            all_businesses: []
          });
        } else if (res.status === 200) {
          this.setState({
            all_businesses: res.data.results.businesses
          });
        }
      })
      .catch(err => {
        CustomFunctions.createNotifications(err.status, err.response.message);
      });

    axios
      .get(BASE_URL + "api/v1/businesses", {
        headers: {
          "x-access-token": CustomFunctions.getToken()
        }
      })
      .then(res => {
        this.setState({
          number_of_records: res.data.results.businesses.length
        });
      });
  }

  handlePageLimit = event => {
    this.setState({
      page_limit: event.target.value,
      limit: event.target.value,
      page_numbers: Math.ceil(
        this.state.number_of_records / Number(event.target.value)
      )
    });
    this.componentDidMount();
  };

  handlePageChange = event => {
    this.setState({
      page: event.target.value
    });
    this.componentDidMount();
  };

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
              >
              </i>
              View
            </Button>
          </td>
        </tr>
      );
    });

    const iterator = [];
    if (this.state.limit !== 0) {
      for (let i = 1; i <= this.state.page_numbers; i++) {
        iterator.push(i);
      }
    } else {
      iterator.push(1);
    }

    const pagination_data = iterator.map(number => {
      return (
        <Pagination.Item
          key={number}
          onClick={this.handlePageChange}
          value={number}
        >
          {number}
        </Pagination.Item>
      );
    });

    return (
      <div className="row">
        <DashboardNavigation />
        <div className="col-sm-9 content-wrapper">
          <div className="panel-heading">
            <h3 className="panel-title">
              <b> All Registered Businesses </b>
            </h3>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row text-right">
                <div className="col-xs-6"> </div>
                <div className="col-xs-6 ">
                  <select
                    className="form-control"
                    id="limit"
                    onChange={this.handlePageLimit}
                  >
                    <option> Limit records per page </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                  </select>
                </div>
              </div>
              <br />
              <div className="clearfix"> </div>
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
              <div className="row text-center">
                <Pagination>
                  <Pagination.Prev /> {pagination_data} <Pagination.Next />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Businesses;
