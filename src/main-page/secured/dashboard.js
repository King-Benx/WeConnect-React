import React from 'react';
import {Redirect} from 'react-router-dom';
import NavBarDash from '../resources/dashboard-navigation';
import checkAuthentication from '../functional-resources/functions';
import business_image from '../img/business.png';

class Dashboard extends React.Component{
    render(){
        return (
            checkAuthentication()? (   
            <div className="row"> 
                <NavBarDash/>
                <div className="col-sm-9 content-wrapper">
                   <img src={business_image} className="img img-responsive" alt=""/>
                </div>
            </div>
            ): <Redirect to={{pathname:'/login'}}/>
        );
    }
}
export default Dashboard;