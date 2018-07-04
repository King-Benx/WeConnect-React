import React from 'react';
import {Link} from 'react-router-dom';
import LoginLogout from './LoginLogout';


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
            <LoginLogout/>
        </div>
    </nav>
    );
}
export default NavBar;