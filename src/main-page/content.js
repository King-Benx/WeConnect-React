import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landing-page'
import LoginPage from './login-page'
import UnknownPage from './unknown-page';
import ServerErrorPage from './server_error';
import Dashboard from './dashboard';

const IndexContent = ()=>{
    return (
        <div className="container-fluid">
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={LandingPage}/>
            <Route exact path="/login" component = {LoginPage}/>
            <Route exact path="/404" component = {UnknownPage}/>
            <Route exact path="/500" component = {ServerErrorPage}/>
            <Route exact path="/dashboard" component = {Dashboard}/>
        </Switch>
        </div>
    );
}
export default IndexContent;