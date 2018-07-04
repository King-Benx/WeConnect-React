import React from 'react';
import {Redirect} from 'react-router-dom';
import { Button, Table} from 'react-bootstrap';
import superagent from 'superagent';
import { BASE_URL } from '../../custom/constants';
import CustomFunctions from '../../custom/CustomFunctions';
import DashboardNavigation from '../../navigation/DashboardNavigation';

class SearchResults extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            all_businesses:[],
            q:props.match.params.search,
            filter_type:props.match.params.filter_type,
            filter_value:props.match.params.filter_value,
        }
    }
    
    showReviews = (event) => {
        this.props.history.push('/all_businesses/'+ event.target.id +'/reviews');
    }

    componentDidMount(){
        superagent
        .get(BASE_URL+'api/v1/businesses/search?q='+this.state.q+'&filter_type='+ this.state.filter_type +'&filter_value='+ this.state.filter_value)
        .set({ 'x-access-token':JSON.parse(localStorage.getItem('data')).token })
        .end((err,res)=>{
            if(err){
                CustomFunctions.createNotifications(err.status,err.toString())
            };
            if (res.status === 404){
                this.setState({ all_businesses:[] });
            }else if(res.status === 200){
                this.setState({ all_businesses:res.body.results.searched_businesses });
            }
        });
    }
    render(){
        const table_data= this.state.all_businesses.map(((business)=>{
            return(
                <tr key={ business.id.toString() }>
                    <td>{ business.date_created }</td>
                    <td>{ business.name }</td>
                    <td>{ business.location }</td>
                    <td>{ business.category }</td>
                    <td>{ business.description }</td>
                    <td>
                        <Button id={business.id} onClick={ this.showReviews } bsStyle="info" block>
                            <i className="glyphicon glyphicon-info-sign"></i> View
                        </Button>
                    </td>
                </tr>
            );
        }));
        return (
            CustomFunctions.checkAuthentication()? (   
            <div className="row"> 
                <DashboardNavigation/>
                <div className="col-sm-9 content-wrapper">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <b>All Registered Businesses</b>
                        </h3>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <Table striped bordered condensed hover>
                                    <thead>
                                        <tr>
                                            <th>Date of Creation</th>
                                            <th>Name</th>
                                            <th>Location</th>
                                            <th>Category</th>
                                            <th>Description</th>
                                            <th>View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {table_data}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ): <Redirect to={{ pathname:'/login' }}/>
        );
    }
}
export default SearchResults;