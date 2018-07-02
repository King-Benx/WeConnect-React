import React from 'react';
import {Redirect} from 'react-router-dom';
import { Modal, Button, Table } from 'react-bootstrap';
import superagent from 'superagent';
import CustomFunctions from '../functional-resources/CustomFunctions';
import {BASE_URL} from '../functional-resources/urls';
import DashboardNavigation from '../shared-components/DashboardNavigation';
class OwnedBusinesses extends React.Component{
    constructor(){
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            owned_businesses:[],
            number_of_reviews:0,
            show:false,
        }
    }

    handleClose() {
        this.setState({ show: false });
      }
    
    handleShow() {
        this.setState({ show: true });
    }
    
    componentDidMount(){
        superagent
        .get(BASE_URL+'api/v1/owned_businesses')
        .set({'x-access-token':JSON.parse(localStorage.getItem('data')).token})
        .end((err,res)=>{
            if(err){CustomFunctions.createNotifications(err.status, res.body.message)};
            if (res.status === 404){
                this.setState({owned_businesses:[],show:false});
            }else if(res.status === 200){
                this.setState({owned_businesses:res.body.results.businesses,show:false});
            }
        });
    }
    
    showReviews(event){
        this.props.history.push('/all_businesses/'+event.target.id+'/reviews');
    }

    deleteBusiness(event){
        superagent
        .del(BASE_URL+'api/v1/businesses/'+event.target.id)
        .set({'x-access-token':JSON.parse(localStorage.getItem('data')).token})
        .end((err,res)=>{
            if(err){CustomFunctions.createNotifications(err.status, err.toString())};
            CustomFunctions.createNotifications(res.status, res.body.message);
            this.props.history.replace('/owned_businesses');
            this.forceUpdate();
        });
    }

    render(){
        const table_data= this.state.owned_businesses.map(((business)=>{

            return(
                <tr key={business.id.toString()}>
                    <td>{business.last_modified.toString().replace('GMT','')}</td>
                    <td>{business.name}</td>
                    <td>{business.location}</td>
                    <td>{business.category}</td>
                    <td>{business.description}</td>
                    <td>
                        <Button id={business.id} onClick={this.showReviews.bind(this)} bsStyle="info" block>
                            <i className="glyphicon glyphicon-star"></i> Reviews
                        </Button>
                    </td>
                    <td>
                        <Button bsStyle="warning" onClick={this.handleShow} block>
                            <i className="glyphicon glyphicon-edit"></i> Edit
                        </Button>
                    </td>
                    <td>
                        <Button id={business.id} onClick={this.deleteBusiness.bind(this)} bsStyle="danger" block><i className="glyphicon glyphicon-trash"></i></Button>
                    </td>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header>
                            <Modal.Title>Edit Business</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                        </Modal.Body>

                        <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
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
                            <b>Your Businesses</b>
                        </h3>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <Table striped bordered condensed hover>
                                    <thead>
                                    <tr>
                                        <th>Last Modified</th>
                                        <th>Name</th>
                                        <th>Location</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Review nos</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
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
            ): <Redirect to={{pathname:'/login'}}/>
        );
    }
}
export default OwnedBusinesses;