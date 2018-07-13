import React from "react";
import { Link, Redirect } from "react-router-dom";
import CustomFunctions from "../custom/CustomFunctions";

const DashboardNavigation = props => {
  return CustomFunctions.checkAuthentication() ? (
    // JSX returned of authenticated user
    <div className="col-sm-3 wrapper">
      <h3 className="text-center">WeConnect</h3>
      <div className="list-group side-menu">
        <Link to="/dashboard" className="list-group-item">
          <i className="glyphicon glyphicon-dashboard" /> Dashboard
        </Link>
        <Link
          to="/create_business"
          className="list-group-item"
          id="create_business"
        >
          <i className="glyphicon glyphicon-plus" /> Create Business
        </Link>
        <Link
          to="/owned_businesses"
          className="list-group-item"
          id="your_business"
        >
          <i className="glyphicon glyphicon-eye-open" /> Your Businesses
        </Link>
        <Link
          to="/all_businesses"
          className="list-group-item"
          id="view_all_businesses"
        >
          <i className="glyphicon glyphicon-th-list" /> View all Businesses
        </Link>
        <Link
          to="/reset_password"
          className="list-group-item"
          id="view_all_businesses"
        >
          <i className="glyphicon glyphicon-wrench" /> Reset Password
        </Link>
      </div>
    </div>
  ) : ( // redirect to login if not authenticated
    <Redirect to={{ pathname: "/login" }} />
  );
};
export default DashboardNavigation;
