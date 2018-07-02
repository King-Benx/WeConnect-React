import React from 'react';
import {Link} from 'react-router-dom';

const DashboardNavigation = ()=>{
    return (
        <div className="col-sm-3 wrapper">
            <h3 className="text-center">WeConnect</h3>
            <div className="list-group side-menu">
                <Link to="/dashboard" className="list-group-item">
                    <i className="glyphicon glyphicon-dashboard"></i> Dashboard
                </Link>
                <Link to="/create_business" className="list-group-item" id="create_business">
                    <i className="glyphicon glyphicon-plus"></i> Create Business
                </Link>
                <Link to="/owned_businesses" className="list-group-item" id="your_business">
                    <i className="glyphicon glyphicon-eye-open"></i> Your Businesses
                </Link>
                <Link to="/all_businesses" className="list-group-item" id="view_all_businesses">
                    <i className="glyphicon glyphicon-th-list"></i> View all Businesses
                </Link>
                <Link to="/dashboard" className="list-group-item">
                    <i className="glyphicon glyphicon-search"></i> Search for Business
                </Link>
            </div>
        </div>
    );
}
export default DashboardNavigation;