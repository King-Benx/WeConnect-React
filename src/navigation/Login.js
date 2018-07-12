import React from 'react';
import { Link } from 'react-router-dom';

const Login = ()=>(
    <li>
        <Link to='/login'>
            <b><i className="glyphicon glyphicon-log-in"></i> Login</b>
        </Link> 
    </li>
)
export default Login;
