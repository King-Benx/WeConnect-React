import React from 'react';
import {Redirect} from 'react-router-dom';
import NavBarDash from '../resources/dashboard-navigation';
import checkAuthentication from '../functional-resources/functions';

class CreateBusiness extends React.Component{
    render(){
        return (
            checkAuthentication()? (   
            <div className="row"> 
                <NavBarDash/>
                <div className="col-sm-9 content-wrapper">
                <div className="panel-heading">
                <h3 className="panel-title">
                    <b>Create A Business</b>
                </h3>
            </div>
            <div className="panel panel-default">
                <div className="panel-body">
                    <form action="" className="form">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon" id="business-addon">Business Name</span>
                                <input type="text" className="form-control" name="name" placeholder="Business Name" aria-describedby="business-addon" required="required"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon" id="location-addon">Location</span>
                                <select className="form-control" name="location" aria-describedby="location-addon" required="required">
                                    <option value="">Select Location Of Business</option>
                                    <option value="inland">Inland</option>
                                    <option value="overseas">Overseas</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon" id="category-addon">Business Category</span>
                                <select className="form-control" name="category" aria-describedby="category-addon" required="required">
                                    <option value="">Select Category Of Business</option>
                                    <option value="technology">Technology</option>
                                    <option value="agriculture">Agriculture</option>
                                    <option value="textiles">Textiles</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon" id="description-addon">Description</span>
                                <textarea className="form-control" name="description" placeholder="Describe your Business" aria-describedby="description-addon"
                                    required="required"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="reset" className="btn btn-default pull-left" value="Reset"/>
                            <input type="submit" className="btn btn-success pull-right" value="Create Business"/>
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