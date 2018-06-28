import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './secured/landing-page'
import LoginPage from './public/login-page'
import UnknownPage from './public/unknown-page';
import ServerErrorPage from './public/server_error';
import Dashboard from './secured/dashboard';
import CreateBusiness from './secured/create_business';
import YourBusinesses from './secured/your_business';
import AllBusinesses from './secured/all_businesses';
import Logout from './secured/logout';

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
            <Route exact path="/create_business" component = {CreateBusiness}/>
            <Route exact path="/your_businesses" component = {YourBusinesses}/>
            <Route exact path="/all_businesses" component = {AllBusinesses}  />
            <Route exact path="/logout" component = {Logout} />
        </Switch>
        </div>
    );
}
export default IndexContent;