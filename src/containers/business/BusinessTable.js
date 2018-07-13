import React from "react";

import { Table, Pagination } from "react-bootstrap";
class BusinessTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // JSX returned
      <div className="panel panel-default">
        <div className="panel-body">
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
              <tbody> {this.props.business_data} </tbody>
            </Table>
          </div>
          <div className="row text-center">
            <Pagination>
              <Pagination.Prev /> {this.props.pagination_data}{" "}
              <Pagination.Next />
            </Pagination>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessTable;
