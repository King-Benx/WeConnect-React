import React from 'react';
import {Redirect} from 'react-router-dom';
import superagent from 'superagent';
import { BASE_URL } from '../functional-resources/urls';

const Logout = ()=>{
    superagent.post(BASE_URL+'api/v1/auth/logout').send({}).set({'x-access-token':localStorage.getItem('token')}).end((err,res)=>{
        if(err){alert(res.body.message)}; 
        alert(res.body.message);
        return <Redirect to="/"/>
    });
    localStorage.removeItem('token');

    return (
        <Redirect to="/"/>
    );
}
export default Logout;