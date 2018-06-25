import React from 'react';
import {Link} from 'react-router-dom'
class LoginPage extends React.Component{
    render(){
        return ( 
            <div className="row">
                <h1 className="text-center">
                    <em>WeConnect</em>
                </h1>
                <div id="login-panel" className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Login</h3>
                    </div>
                    <div className="panel-body">
                        <form action="dashboard.html" className="form">
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon" id="email-addon">Email</span>
                                    <input type="email" className="form-control" name="email" placeholder="johndoe@mail.com" aria-describedby="email-addon" required="required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon" id="password-addon">Password</span>
                                    <input type="password" className="form-control" name="password" placeholder="Password" aria-describedby="password-addon" required="required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-default pull-left" value="Reset"/>
                                <input type="submit" className="btn btn-primary pull-right" value="Login"/>
                                <div className="clearfix"></div>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link to="/">Not a member? Register Today!</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginPage;