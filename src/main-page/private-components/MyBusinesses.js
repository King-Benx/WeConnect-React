import React from 'react';
import {Redirect} from 'react-router-dom';
import superagent from 'superagent';
import checkAuthentication from '../functional-resources/checkAuthentication';
import {BASE_URL} from '../functional-resources/urls';
import DashboardNavigation from '../shared-components/DashboardNavigation';
class MyBusinesses extends React.Component{
    constructor(){
        super();
        this.state = {
            your_businesses:[]
        }
    }
    componentDidMount(){
        superagent
        .get(BASE_URL+'api/v1/your_businesses')
        .set({'x-access-token':localStorage.getItem('token')})
        .end((err,res)=>{
            if(err){alert(res.body.message);};
            if (res.status === 404){
                this.setState({your_businesses:[]});
            }else if(res.status === 200){
                this.setState({your_businesses:res.body.results.businesses});
            }

        });
    }

    render(){
        const table_data= this.state.your_businesses.map(((business)=>{
            return(
                <tr key={business.id.toString()}>
                    <td>{business.last_modified.toString().replace('GMT','')}</td>
                    <td>{business.name}</td>
                    <td>{business.location}</td>
                    <td>{business.category}</td>
                    <td>{business.description}</td>
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
            );
        }));
        return (
            checkAuthentication()? (   
            <div className="row"> 
                <DashboardNavigation/>
                <div className="col-sm-9 content-wrapper">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <b>Your Businesses</b>
                        </h3>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table  className="table table-hovered table-checked table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Last Modified</th>
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Review nos</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
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
export default MyBusinesses;