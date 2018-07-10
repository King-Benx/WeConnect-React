import React from 'react';
import { Button } from 'react-bootstrap';
import CustomFunctions from '../../custom/CustomFunctions';
import axios from 'axios';
import {BASE_URL} from '../../custom/constants';
import DashboardNavigation from '../../navigation/DashboardNavigation';

class CreateBusiness extends React.Component{
    constructor(){
        super();
        this.state = {name:"", location:"",category:"",description:""}
    }


    handleChange = (event) => {
        // changes state on input change
        this.setState({[event.target.id]: event.target.value});
    }
    
    handleReset = (event) => {
        // resets the create business form
        this.setState({name:"", location:"",category:"",description:""});
    }

    formSubmit = (event) => {
        // handles form submit
        event.preventDefault();
        axios
            .post(BASE_URL+'api/v1/businesses',
            {name:this.state.name,location:this.state.location, description:this.state.description, category:this.state.category},
            {headers: {'x-access-token':CustomFunctions.getToken()}})
            .then(res => {
                CustomFunctions.createNotifications(res.status, res.data.message);
                this.props.history.replace('/owned_businesses');
            })
            .catch(err => {
               CustomFunctions.createNotifications(err.status, err.response.data.message);         
            });
    }
    render(){
        return ( 
            <div className="row"> 
                <DashboardNavigation/>
                <div className="col-sm-9 content-wrapper">
                <div className="panel-heading">
                <h3 className="panel-title">
                    <b>Create A Business</b>
                </h3>
            </div>
            <div className="panel panel-default">
                <div className="panel-body">
                    <form method="POST" className="form" onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Business Name" aria-describedby="business-addon" required="required"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="location" id="location" value={this.state.location} onChange={this.handleChange} placeholder="Business Location" aria-describedby="location-addon" required="required"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="category" id="category" value={this.state.category} onChange={this.handleChange} placeholder="Business Name" aria-describedby="category-addon" required="required"/>  
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="description" id="description" value={this.state.description} onChange={this.handleChange} placeholder="Describe your Business" aria-describedby="description-addon"
                                    required="required"></textarea>
                        </div>
                        <div className="form-group">
                            <Button type="reset" onClick={this.handleReset} className="pull-left"><i className="glyphicon glyphicon-refresh"></i> Reset</Button>
                            <Button type="submit" className="pull-right" bsStyle="primary"><i className="glyphicon glyphicon-plus"></i> Create Business</Button>
                            <div className="clearfix"></div>
                        </div>
                    </form>
                </div>
            </div>
                </div>
            </div>
        );
    }
}
export default CreateBusiness;