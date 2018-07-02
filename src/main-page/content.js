import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './private-components/LandingPage'
import LoginPage from './public/LoginPage'
import UnknownPage from './public/UnknownPage';
import ServerErrorPage from './public/ServerErrorPage';
import Dashboard from './private-components/Dashboard';
import CreateBusiness from './private-components/CreateBusiness';
import OwnedBusinesses from './private-components/OwnedBusinesses';
import AllBusinesses from './private-components/Businesses';
import Logout from './private-components/Logout';
import Reviews from './private-components/Reviews';

const Content = ()=>{
    return (
        <div className="container-fluid">
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={LandingPage}/>
            <Route exact path="/login" component = {LoginPage}/>
            <Route exact path="/500" component = {ServerErrorPage}/>
            <Route exact path="/dashboard" component = {Dashboard}/>
            <Route exact path="/create_business" component = {CreateBusiness}/>
            <Route exact path="/owned_businesses" component = {OwnedBusinesses}/>
            <Route exact path="/all_businesses" component = {AllBusinesses}  />
            <Route exact path="/all_businesses/:id/reviews" component = {Reviews}  />
            <Route exact path="/logout" component = {Logout} />
            <Route component = {UnknownPage}/>
        </Switch>
        </div>
    );
}
export default Content;