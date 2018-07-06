import React from 'react';
import { Redirect } from 'react-router-dom';
import business_image from '../../images/business.png';
import DashboardNavigation from '../../navigation/DashboardNavigation';
import CustomFunctions from '../../custom/CustomFunctions';
import { Image } from 'react-bootstrap'

class Dashboard extends React.Component{
    render(){
        return (
            CustomFunctions.checkAuthentication() ? (   
            <div className="row"> 
                <DashboardNavigation/>
                <div className="col-sm-9 content-wrapper">
                   <Image src={ business_image } alt="" rounded responsive/>
                </div>
            </div>
            ): <Redirect to={{ pathname:'/login' }}/>
        );
    }
}
export default Dashboard;