import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../custom/constants';
import CustomFunctions from '../../custom/CustomFunctions';

class Logout extends React.Component{
 // logouts the user and blacklists a token from the api side at the same time
    render(){
        axios.post(BASE_URL+'api/v1/auth/logout',{},
    {headers:{'x-access-token':CustomFunctions.getToken()}})
    .then(res=>{
        CustomFunctions.createNotifications(res.status,res.data.message);
        CustomFunctions.deleteToken();
    })
    .catch(err => { 
        CustomFunctions.createNotifications(err.status, err.response.data.message);   
    });
    return <Redirect to={{pathname:'/'}}/>
    }
}
export default Logout;