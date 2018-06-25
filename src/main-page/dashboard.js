import React from 'react';
import {Link} from 'react-router-dom'
import business_image from './img/business.png';
class Dashboard extends React.Component{
    render(){
        return (
            <div className="row"> 
                <div className="col-sm-3 wrapper">
                    <h3 className="text-center">WeConnect</h3>
                    <div className="list-group side-menu">
                        <a href="#" className="list-group-item active">
                            <i className="glyphicon glyphicon-dashboard"></i> Dashboard
                        </a>
                        <a href="create_business.html" className="list-group-item">
                            <i className="glyphicon glyphicon-plus"></i> Create Business</a>
                        <a href="#" className="list-group-item">
                            <i className="glyphicon glyphicon-eye-open"></i> Your Businesses</a>
                        <a href="#" className="list-group-item">
                            <i className="glyphicon glyphicon-th-list"></i> View all Businesses</a>
                        <a href="search.html" className="list-group-item">
                            <i className="glyphicon glyphicon-search"></i> Search for Business</a>
                        <a href="#" className="list-group-item">
                            <i className="glyphicon glyphicon-log-out"></i> Logout</a>
                    </div>
                </div>
                <div className="col-sm-9 content-wrapper">
                    <img src={business_image} className="img img-responsive img-rounded" alt=""/>
                </div>
            </div>
        );
    }
}
export default Dashboard;