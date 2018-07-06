import React from 'react';
import {Redirect} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CustomFunctions from '../../custom/CustomFunctions';
import superagent from 'superagent';
import {BASE_URL} from '../../custom/constants';
import DashboardNavigation from '../../navigation/DashboardNavigation';

class CreateBusiness extends React.Component{
    constructor(){
        super();
        this.state = {name:"", location:"",category:"",description:""}
    }


    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }
    
    handleReset = (event) => {
        this.setState({name:"", location:"",category:"",description:""});
    }

    formSubmit = (event) => {
        event.preventDefault();
        superagent
            .post(BASE_URL+'api/v1/businesses')
            .send({name:this.state.name,location:this.state.location, description:this.state.description, category:this.state.category})
            .set({'x-access-token':JSON.parse(localStorage.getItem('data')).token})
            .end((err,res)=>{
                if(err){CustomFunctions.createNotifications(err.status, err.toString());};
                CustomFunctions.createNotifications(res.status, res.body.message)
                this.props.history.replace('/owned_businesses');
            });
    }
    render(){
        return (
            CustomFunctions.checkAuthentication()? (   
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
            ): <Redirect to={{pathname:'/login'}}/>
        );
    }
}
export default CreateBusiness;