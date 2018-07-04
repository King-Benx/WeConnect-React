import React from 'react';
import CustomFunctions from '../custom/CustomFunctions';
import Login from '../navigation/Login';
import Search from '../containers/business/Search';
import Logout from '../navigation/Logout';
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