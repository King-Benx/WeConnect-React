import React from 'react';
import {Redirect} from 'react-router-dom';
import background_img from '../img/business.png';
import { Image } from 'react-bootstrap';
class DashboardPageImage extends React.Component{
    render(){
        return  CustomFunctions.checkAuthentication()? ( 
            <Image src={background_img} alt="" responsive rounded/>
        ):<Redirect to={{pathname:'/login'}}/> ;
    }
}
export default DashboardPageImage;