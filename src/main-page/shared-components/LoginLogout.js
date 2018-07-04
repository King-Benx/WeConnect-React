import React from 'react';
import CustomFunctions from '../functional-resources/CustomFunctions';
import Login from './Login';
import Search from './Search';
import Logout from './Logout';
class LoginLogout extends React.Component{
    render(){
    return (
        CustomFunctions.checkAuthentication()?(
        <ul className="nav navbar-nav navbar-right">
            <Search/>
            <Logout/>
        </ul>
    ):(
        <ul className="nav navbar-nav navbar-right">
            <Login/>
        </ul>
)
    );
    }
}
export default LoginLogout;