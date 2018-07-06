import React from 'react';
import { Redirect } from 'react-router-dom';
import superagent from 'superagent';
import { BASE_URL } from '../../custom/constants';
import CustomFunctions from '../../custom/CustomFunctions';

const Logout = ()=>{
    superagent.post(BASE_URL+'api/v1/auth/logout').send({}).set({'x-access-token':CustomFunctions.getToken()}).end((err,res)=>{
        if(err){ CustomFunctions.createNotifications(err.status,err.toString()) }; 
          CustomFunctions.createNotifications(res.status,res.body.message);
    });
    localStorage.clear();
    localStorage.removeItem('data');
    return  <Redirect to="/"/>;
}
export default Logout;