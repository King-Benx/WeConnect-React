import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {search:"", filter_type:"",filter_value:"",description:""}
    }

    static contextTypes = {
        router: PropTypes.object
    }
    
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    formSubmit = (event) => {
        event.preventDefault();
        const search_query= "/search/"+this.state.search+"/"+this.state.filter_type+"/"+this.state.filter_value;
        this.context.router.history.push(search_query)
        this.setState({search:"", filter_type:"",filter_value:"",description:""})
    }

    render(){
        return (
        <li>
            <form className="navbar-form" onSubmit={ this.formSubmit }>
                <div className="form-group">
                    <select id="filter_type" name="filter_type" value={ this.state.filter_type } className="form-control" onChange={ this.handleChange }>
                        <option value="">Filter by</option>
                        <option value="location">Location</option>
                        <option value="category">Category</option>
                    </select>|
                </div>
                <div className="form-group">
                    <input type="text" id="filter_value" value={ this.state.filter_value } onChange={ this.handleChange } className="form-control" placeholder="filter value"/>|
                </div>
                <div className="form-group">
                    <input type="text" id="search" value={ this.state.search } onChange={ this.handleChange } className="form-control" placeholder="Search" required="required"/>|
                </div>
                <Button bsStyle="info" type="submit" onChange={ this.handleChange } className="btn btn-default"><i className="glyphicon glyphicon-search"></i></Button>
            </form>
        </li>
        );
    }
}
export default Search;