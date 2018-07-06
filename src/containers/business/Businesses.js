import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import superagent from 'superagent';
import { BASE_URL } from '../../custom/constants';
import CustomFunctions from '../../custom/CustomFunctions';
import DashboardNavigation from '../../navigation/DashboardNavigation';

class Businesses extends React.Component{
    
    constructor(){
        super();
        this.state = {
            all_businesses:[],
            page:'',
            limit:'',
            number_of_records: ''
        }
    }
    
    showReviews = (event) => {
        this.props.history.push('/all_businesses/'+event.target.id+'/reviews');
    }

    componentDidMount(){
        superagent
        .get(BASE_URL+'api/v1/businesses?page='+this.state.page+'&limit='+this.state.limit)
        .set({'x-access-token':CustomFunctions.getToken()})
        .end((err,res)=>{
            if(err){
                CustomFunctions.createNotifications(err.status,res.body.message)
            };
            if (res.status === 404){
                this.setState({all_businesses:[]});
            }else if(res.status === 200){
                console.log(res.body.results.businesses.length)
                this.setState({all_businesses : res.body.results.businesses});
            }
        });

        // superagent
        // .get(BASE_URL+'api/v1/businesses')
        // .set({'x-access-token':CustomFunctions.getToken()})
        // .end((err,res)=>{
        //     this.setState({number_of_records : res.body.results.businesses.length});
        // });

    }

    // handlePageLimit = (event) => {
    //     this.setState({limit: event.target.id, page_numbers: Math.ceil(this.state.number_of_records/ Number(event.target.id))})
    //     this.componentDidMount()
    // }

    // handlePageChange = (event) => {
    //     this.setState({ page: event.target.value, limit:this.state.limit })
    //     this.componentDidMount()
    // }

    render(){
        const table_data = this.state.all_businesses.map(((business)=>{
            return(
                <tr key={business.id.toString()}>
                    <td>{business.date_created}</td>
                    <td>{business.name}</td>
                    <td>{business.location}</td>
                    <td>{business.category}</td>
                    <td>{business.description}</td>
                    <td>
                        <Button id={business.id} onClick={this.showReviews} bsStyle="info" block>
                            <i className="glyphicon glyphicon-info-sign"></i> View
                        </Button>
                    </td>
                </tr>
            );
        }));

        // const iterator = [];
        // if (this.state.limit !== 0){
        //     for (let i=1; i<= this.state.page_numbers; i ++){
        //         iterator.push(i);
        //     }
        // }
        // else{
        //     iterator.push(1);
        // }

        // const pagination_data = iterator.map((number) => {
        //     return(
        //         <Pagination.Item key={number} onClick={ this.handlePageChange } value={ number }>{ number }</Pagination.Item>
        //     );
        // });

        return (
            CustomFunctions.checkAuthentication() ? (   
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
                            {/* <div className="row text-right">
                                <input type="number" min="1" value={this.state.limit } onChange={ this.handlePageLimit } />
                            </div>
                            <br/> */}
                            <div className="clearfix"></div>
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
                            {/* <div className="row text-center">
                                <Pagination>
                                    <Pagination.Prev />
                                        { pagination_data } 
                                    <Pagination.Next />
                                </Pagination>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            ): <Redirect to={{pathname:'/login'}}/>
        );
    }
}
export default Businesses;