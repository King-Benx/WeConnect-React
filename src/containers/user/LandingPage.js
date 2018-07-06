import React from 'react';
import business_image from '../../images/business-3152586_640.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import superagent from 'superagent';
import { BASE_URL } from '../../custom/constants';
import CustomFunctions from '../../custom/CustomFunctions';

class LandingPage extends React.Component{
    constructor(){
        super();
        this.state = { username:"", email:"",password:"",confirm_password:"" }
    }


    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }
    
    handleReset = (event) => {
        this.setState({username:"", email:"",password:"",confirm_password:""});
    }

    formSubmit = (event) => {
        event.preventDefault();
        if (this.state.password === this.state.confirm_password){
            if (this.state.password.length > 4){
                superagent
                    .post(BASE_URL+'api/v1/auth/register')
                    .send({ username:this.state.username, email:this.state.email, password:this.state.password })
                    .end((err,res)=>{
                        if(err){ CustomFunctions.createNotifications(err.status, err.toString()) }; 
                        CustomFunctions.createNotifications(res.status,res.body.message);
                        this.props.history.replace('/login');
                    });
                }else{
                    CustomFunctions.createNotifications(400,'Password too short!');
                }
            }else{
                CustomFunctions.createNotifications(400,'Passwords are not similar');
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
                            <form method="POST" onSubmit={ this.formSubmit } className="form">
                                <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username" value={this.state.username} id="username" name="username" onChange={ this.handleChange } required="required"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="johndoe@mail.com" value={this.state.email} id="email" name="email" onChange={ this.handleChange } aria-describedby="email-addon" required="required"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" id="password" value={this.state.password}  name="password" onChange={ this.handleChange } aria-describedby="password-addon" required="required"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.confirm_password} id="confirm_password"  onChange={ this.handleChange }  name="confirm_password" aria-describedby="confirm_password-addon"
                                            required="required"/>
                                </div>
                                <div className="form-group">
                                    <Button type="reset" onClick={ this.handleReset } className="pull-left"><i className="glyphicon glyphicon-refresh"></i> Reset</Button>
                                    <Button type="submit" className="pull-right" bsStyle="primary"><i className="glyphicon glyphicon-plus-sign"></i> Register</Button>
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
                            <img src={ business_image } className="img img-responsive" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LandingPage;