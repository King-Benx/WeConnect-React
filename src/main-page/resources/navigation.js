import React from 'react';
import {Link} from 'react-router-dom';
import checkAuthentication from '../functional-resources/functions';

const Navigate = ()=>{
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

const NavBar = ()=>{
    return (
        <nav className="navbar navbar-inverse">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">WeConnect</Link>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Navigate />
                </li>
            </ul>
        </div>
    </nav>
    );
}
export default NavBar;