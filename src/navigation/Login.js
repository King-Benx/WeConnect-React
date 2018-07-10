import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const Login = ()=>(
    <li>
        <BrowserRouter >
        <Link to='/login'>
            <b><i className="glyphicon glyphicon-log-in"></i> Login</b>
        </Link>
        </BrowserRouter>  
    </li>
)
export default Login;
