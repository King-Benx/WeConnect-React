import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../custom/constants';
import CustomFunctions from '../../custom/CustomFunctions';

const Logout = () => {
 // logouts the user and blacklists a token from the api side at the same time
    axios.post(BASE_URL+'api/v1/auth/logout',{},
    {headers:{'x-access-token':CustomFunctions.getToken()}})
    .then(res=>{
        CustomFunctions.createNotifications(res.status,res.data.message);
    })
    .catch(err => { 
        CustomFunctions.createNotifications(err.status, err.response.data.message);   
    });
    CustomFunctions.deleteToken();
    return <Redirect to={{pathname:'/'}} />
}
export default Logout;