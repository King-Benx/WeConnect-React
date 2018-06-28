import React from 'react';
import {Redirect} from 'react-router-dom';
import NavBarDash from '../resources/dashboard-navigation';
import checkAuthentication from '../functional-resources/functions';

class YourBusinesses extends React.Component{
    
    render(){
        return (
            checkAuthentication()? (   
            <div className="row"> 
                <NavBarDash/>
                <div className="col-sm-9 content-wrapper">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <b>Your Businesses</b>
                        </h3>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table  className="table table-hovered table-checked">
                                    <tr>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Location</th>
                                        <th>Description</th>
                                        <th>Review nos</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                    <tr>
                                        <td>business name</td>
                                        <td>business category</td>
                                        <td>business location</td>
                                        <td>business description</td>
                                        <td>
                                            <a href="reviews.html">10 reviews</a>
                                        </td>
                                        <td>
                                            <a href="edit_business.html">Edit</a>
                                        </td>
                                        <td>
                                            <a href="">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>business name</td>
                                        <td>business category</td>
                                        <td>business location</td>
                                        <td>business description</td>
                                        <td>
                                            <a href="reviews.html">10 reviews</a>
                                        </td>
                                        <td>
                                            <a href="edit_business.html">Edit</a>
                                        </td>
                                        <td>
                                            <a href="">Delete</a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ): <Redirect to={{pathname:'/login'}}/>
        );
    }
}
export default YourBusinesses;