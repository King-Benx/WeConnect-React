import React from 'react';
import business_image from '../img/business-3152586_640.jpg';
import {Link} from 'react-router-dom';
import superagent from 'superagent';
import {BASE_URL} from '../functional-resources/urls';

class LandingPage extends React.Component{
    constructor(){
        super();
        this.state = {username:"", email:"",password:"",confirm_password:""}
    }


    handleChange = (event)=>{
        this.setState({[event.target.id]: event.target.value});
    }
    
    formSubmit(event){
        event.preventDefault();
        if (this.state.password === this.state.confirm_password){
            if (this.state.password.length > 4){
                superagent
                    .post(BASE_URL+'api/v1/auth/register')
                    .send({username:this.state.username,email:this.state.email, password:this.state.password})
                    .end((err,res)=>{
                        if(err){alert(res.body.message)}; 
                        alert(res.body.message);
                        this.props.history.replace('/login');
                    });
                }else{
                    alert ('Passwords too short! Password cannot be less than 4 characters');
                }
            }else{
            alert ('Passwords do not match! Please try again');
        }
    }

    render(){
        return ( 
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 pull-right">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">Registration Form</h3>
                        </div>
                        <div className="panel-body">
                            <form method="POST" onSubmit={this.formSubmit.bind(this)} className="form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon" id="username-addon">Username</span>
                                        <input type="text" className="form-control" placeholder="Username" value={this.state.username} id="username" name="username" onChange={this.handleChange.bind(this)} aria-describedby="username-addon" required="required"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon" id="email-addon">Email</span>
                                        <input type="email" className="form-control" placeholder="johndoe@mail.com" value={this.state.email} id="email" name="email" onChange={this.handleChange.bind(this)} aria-describedby="email-addon" required="required"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon" id="password-addon">Password</span>
                                        <input type="password" className="form-control" placeholder="Password" id="password" value={this.state.password}  name="password" onChange={this.handleChange.bind(this)} aria-describedby="password-addon" required="required"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon" id="confirm_password-addon">Confirm Password</span>
                                        <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.confirm_password} id="confirm_password"  onChange={this.handleChange.bind(this)}  name="confirm_password" aria-describedby="confirm_password-addon"
                                            required="required"/>
                                        <span id='message'></span>
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