import React from 'react';
import {Redirect} from 'react-router-dom';
import business_image from '../../images/business.png';
import DashboardNavigation from '../../navigation/DashboardNavigation';
import CustomFunctions from '../../custom/CustomFunctions';

class Dashboard extends React.Component{
    render(){
        return (
            CustomFunctions.checkAuthentication() ? (   
            <div className="row"> 
                <DashboardNavigation/>
                <div className="col-sm-9 content-wrapper">
                   <img src={business_image} className="img img-responsive" alt=""/>
                </div>
            </div>
            ): <Redirect to={{pathname:'/login'}}/>
        );
    }
}
export default Dashboard;