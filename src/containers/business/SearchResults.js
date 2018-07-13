import React from "react";
import { Button, Pagination } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../custom/constants";
import CustomFunctions from "../../custom/CustomFunctions";
import DashboardNavigation from "../../navigation/DashboardNavigation";
import BusinessTable from './BusinessTable';
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all_businesses: [],
      q: props.match.params.search,
      filter_type: props.match.params.filter_type,
      filter_value: props.match.params.filter_value,
      page: "",
      paginate:"",
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
          this.state.filter_value +"&page="+ this.state.page+"&limit=5",
        {
          headers: {
            "x-access-token": CustomFunctions.getToken()
          }
        }
      )
      .then(res => {
          this.setState({
            all_businesses: res.data.results.searched_businesses,
            paginate: res.data.results.records,
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
        all_businesses: res.data.results.searched_businesses,
        paginate: res.data.results.records,
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

  handlePageChange = event => {
    // change page depending on pagination item clicked
    const page_id = event.target.id;
      this.setState({
          page: page_id
        });
      this.componentDidMount();
  };
  
  render() {
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
          <BusinessTable business_data={table_data} pagination_data={pagination_data} />
        </div>
      </div>
    );
  }
}
export default SearchResults;
