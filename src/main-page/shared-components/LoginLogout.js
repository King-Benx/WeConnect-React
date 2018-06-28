import React from 'react';
import {Link} from 'react-router-dom';
import checkAuthentication from '../functional-resources/checkAuthentication';

const LoginLogout = ()=>{
    return (
    checkAuthentication()?(
            <Link to='/logout'>
                <b><i className="glyphicon glyphicon-log-out"></i> Logout</b>
            </Link>
    ):(
            <Link to='/login'>
                <b><i className="glyphicon glyphicon-lock"></i> Login</b>
            </Link>
        )
    );
}
export default LoginLogout;