import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CustomFunctions from '../functional-resources/CustomFunctions';
class LoginLogout extends React.Component{
    constructor(){
        super();
        this.state={search:"",filter_type:"",filter_value:""}
    }
    
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.setState={search:this.state.search,filter_type:this.state.filter_type,filter_value:this.state.filter_value}
    }

    render(){
    return (
        CustomFunctions.checkAuthentication()?(
        <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li>
                <form className="navbar-form" onSubmit={this.formSubmit}>
                    <div class="form-group">
                        <select name="filter_type" class="form-control">
                            <option value="">Filter by</option>
                            <option value="location">Location</option>
                            <option value="category">Category</option>
                        </select>|
                    </div>
                    <div class="form-group">
                        <input type="text" id="filter_value" class="form-control" placeholder="filter value"/>|
                    </div>
                    <div class="form-group">
                        <input type="text" id="search" class="form-control" placeholder="Search" required="required"/>|
                    </div>
                    <Button bsStyle="info" type="submit" class="btn btn-default"><i className="glyphicon glyphicon-search"></i></Button>
                </form>
                </li>
                <li> 
                <Link to='/logout'>
                    <b><i className="glyphicon glyphicon-log-out"></i> Logout</b>
                </Link>
                </li>
            </ul>
        </div>
    ):(
        <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to='/login'>
                        <b><i className="glyphicon glyphicon-log-in"></i> Login</b>
                    </Link>
                </li>
            </ul>
        </div>
        )
    );
}
}
export default LoginLogout;