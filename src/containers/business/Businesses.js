import React from "react";
import { Button, Pagination } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../custom/constants";
import CustomFunctions from "../../custom/CustomFunctions";
import DashboardNavigation from "../../navigation/DashboardNavigation";
import BusinessTable from "./BusinessTable";

class Businesses extends React.Component {
  constructor() {
    super();
    this.state = {
      all_businesses: [],
      page: "",
      paginate:"",
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
          "&limit=5",
        {
          headers: {
            "x-access-token": CustomFunctions.getToken()
          }
        }
      )
      .then(res => {
        this.setState({
          all_businesses: res.data.results.businesses,
          paginate: res.data.results.records,
        })
      })
      .catch(err => {
        this.setState({
          all_businesses: []
        });
      })
  }
  
  handlePageChange = event => {
    // change page depending on pagination item clicked
    const page_id = event.target.id;
      this.setState({
          page: page_id
        });
      this.componentDidMount();
  };

  render() {
    const table_data = this.state.all_businesses.map(business => {
      return (
        // define business structure
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

    // Generate pagination data
    const iterator = [];
    if (this.state.paginate !== 0) {
      for (let i = 1; i <= this.state.paginate; i++) {
        iterator.push(i);
      }
    } else {
      iterator.push(1);
    }

    // define pagination structure
    const pagination_data = iterator.map(number => {
     
      return (
        <Pagination.Item
          id= {number}
          onClickCapture={this.handlePageChange}
        >
          {number}
        </Pagination.Item>
      );
    });

    return (
      // JSX returned
      <div className="row">
        <DashboardNavigation />
        <div className="col-sm-9 content-wrapper">
          <div className="panel-heading">
            <h3 className="panel-title">
              <b> All Registered Businesses </b>
            </h3>
          </div>
          <BusinessTable business_data={table_data} pagination_data={pagination_data}/>
        </div>
      </div>
    );
  }
}
export default Businesses;
