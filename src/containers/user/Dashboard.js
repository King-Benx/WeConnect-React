import React from 'react';
import business_image from '../../images/business.png';
import DashboardNavigation from '../../navigation/DashboardNavigation';
import { Image } from 'react-bootstrap'

class Dashboard extends React.Component{
    render(){
        return (  
            <div className="row"> 
                <DashboardNavigation/>
                <div className="col-sm-9 content-wrapper">
                   <Image src={ business_image } alt="" rounded responsive/>
                </div>
            </div>
        );
    }
}
export default Dashboard;