import React from 'react';
import business_image from './img/business-3152586_640.jpg';
import {Link} from 'react-router-dom'
class LandingPage extends React.Component{
    render(){
        return ( 
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 pull-right">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">Registration Form</h3>
                        </div>
                        <div className="panel-body">
                            <form action="login.html" className="form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon" id="name-addon">Name</span>
                                        <input type="text" className="form-control" placeholder="Name" name="name" aria-describedby="name-addon" required="required"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon" id="username-addon">Username</span>
                                        <input type="text" className="form-control" placeholder="Username" name="username" aria-describedby="username-addon" required="required"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon" id="email-addon">Email</span>
                                        <input type="email" className="form-control" placeholder="johndoe@mail.com" name="email" aria-describedby="email-addon" required="required"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon" id="password-addon">Password</span>
                                        <input type="password" className="form-control" placeholder="Password" name="password" aria-describedby="password-addon" required="required"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon" id="confirm_password-addon">Confirm Password</span>
                                        <input type="password" className="form-control" placeholder="Confirm Password" name="confirm_password" aria-describedby="confirm_password-addon"
                                            required="required"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-default pull-left" value="Reset"/>
                                    <input type="submit" className="btn btn-primary pull-right" value="Register"/>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                            <div className="text-center">
                                <Link to="/login">Already a member? Login Here!</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12 pull-left">
                    <div className="jumbotron">
                        <div className="container">
                            <h1>Welcome to WeConnect</h1>
                            <p>WeConnect provides a platform that brings businesses and individuals together. This platform creates
                                awareness for businesses and gives the users the ability to write reviews about the businesses
                                they have interacted with.</p>
                            <img src={business_image} className="img img-responsive" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LandingPage;