import React from 'react';
import {Link} from 'react-router-dom';
import CustomFunctions from '../functional-resources/CustomFunctions';
const LoginLogout = ()=>{
    return (
        CustomFunctions.checkAuthentication()?(
            <Link to='/logout'>
                <b><i className="glyphicon glyphicon-log-out"></i> Logout</b>
            </Link>
    ):(
            <Link to='/login'>
                <b><i className="glyphicon glyphicon-log-in"></i> Login</b>
            </Link>
        )
    );
}
export default LoginLogout;