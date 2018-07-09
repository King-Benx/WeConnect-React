import React from 'react';
import reset_password from '../../images/reset_password.png';
import DashboardNavigation from '../../navigation/DashboardNavigation';
import CustomFunctions from '../../custom/CustomFunctions';
import { BASE_URL } from '../../custom/constants';
import { Image, Button } from 'react-bootstrap'
import superagent from 'superagent'

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state={
            password:"",
            confirm_password: ""
        }
    }

    handleReset = (event) => {
        this.setState({password:"", confirm_password:""});
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    formSubmit = (event) => {
        event.preventDefault();
        if (this.state.password === this.state.confirm_password){
            if (this.state.password.length > 4){
                superagent
                    .post(BASE_URL+'api/v1/auth/reset-password')
                    .send({ new_password:this.state.password })
                    .set({'x-access-token':CustomFunctions.getToken()})
                    .end((err,res)=>{
                        if(err){ CustomFunctions.createNotifications(err.status,err.toString()) }; 
                        CustomFunctions.createNotifications(res.status,res.body.message);
                        this.props.history.replace('/dashboard');
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
                <DashboardNavigation/>
                <div className="col-sm-9 content-wrapper">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 text-center">
                            <Image src={reset_password} rounded responsive/>
                            <em class="text-info">Secure your information by changing your password regularly</em>
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <form method="POST" className="form" onSubmit={this.formSubmit}>
                                        <legend className="text text-center">Reset Password</legend>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password" id="password" value={this.state.password}  name="password" onChange={ this.handleChange } aria-describedby="password-addon" required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.confirm_password} id="confirm_password"  onChange={ this.handleChange }  name="confirm_password" aria-describedby="confirm_password-addon"
                                                    required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <Button type="reset" onClick={this.handleReset} className="pull-left"><i className="glyphicon glyphicon-refresh"></i> Reset</Button>
                                            <Button type="submit" className="pull-right" bsStyle="warning"><i className="glyphicon glyphicon-wrench"></i> Reset Password</Button>
                                            <div className="clearfix"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;