import React from 'react';
import {Redirect} from 'react-router-dom';
import superagent from 'superagent';
import { BASE_URL } from '../functional-resources/urls';
import checkAuthentication from '../functional-resources/checkAuthentication';
import DashboardNavigation from '../shared-components/DashboardNavigation';

class Businesses extends React.Component{
    constructor(){
        super();
        this.state = {
            all_businesses:[]
        }
    }
    componentDidMount(){
        superagent
        .get(BASE_URL+'api/v1/businesses')
        .set({'x-access-token':localStorage.getItem('token')})
        .end((err,res)=>{
            if(err){alert(res.body.message)};
            if (res.status === 404){
                this.setState({all_businesses:[]});
            }else if(res.status === 200){
                this.setState({all_businesses:res.body.results.businesses});
            }
        });
    }
    render(){
        const table_data= this.state.all_businesses.map(((business)=>{
            return(
                <tr key={business.id.toString()}>
                    <td>{business.date_created}</td>
                    <td>{business.name}</td>
                    <td>{business.location}</td>
                    <td>{business.category}</td>
                    <td>{business.description}</td>
                    <td>
                        <a href="reviews.html">10 reviews</a>
                    </td>
                </tr>
            );
        }));
        return (
            checkAuthentication()? (   
            <div className="row"> 
                <DashboardNavigation/>
                <div className="col-sm-9 content-wrapper">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <b>All Registered Businesses</b>
                        </h3>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-checked">
                                    <thead>
                                        <tr>
                                            <th>Date of Creation</th>
                                            <th>Name</th>
                                            <th>Location</th>
                                            <th>Category</th>
                                            <th>Description</th>
                                            <th>Reviews</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {table_data}
                                    </tbody>
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
export default Businesses;