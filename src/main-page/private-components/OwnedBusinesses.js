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
            business:[],
            name:"", 
            location:"",
            category:"",
            description:""
        }
    }
    handleReset = (event)=> {
        this.setState({name:"", location:"",category:"",description:""});
    }

    handleChange = (event)=>{
        this.setState({[event.target.id]: event.target.value});
    }

    handleClose() {
        this.setState({ show: false });
      }
    
    handleShow= (event) => {
        superagent
        .get(BASE_URL+'api/v1/businesses/'+event.target.id)
        .set({'x-access-token':JSON.parse(localStorage.getItem('data')).token})
        .end((err,res)=>{
            if(err){CustomFunctions.createNotifications(err.status, err.toString())};
            this.setState({
                show:true ,
                business:res.body.business_info,
                business_id:res.body.business_info.id,
                name:res.body.business_info.name,
                location:res.body.business_info.location,
                category:res.body.business_info.category,
                description:res.body.business_info.description,
            })
        });
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
            this.componentDidMount();
        });
    }

    handleSubmit = (event)=> {
        event.preventDefault();
        superagent
            .put(BASE_URL+'api/v1/businesses/'+this.state.business_id)
            .send({name:this.state.name,location:this.state.location, description:this.state.description, category:this.state.category})
            .set({'x-access-token':JSON.parse(localStorage.getItem('data')).token})
            .end((err,res)=>{
                if(err){CustomFunctions.createNotifications(err.status, err.toString());};
                CustomFunctions.createNotifications(res.status, res.body.message)
                this.componentDidMount();
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
                        <Button id={business.id} bsStyle="warning" onClick={this.handleShow} block>
                            <i className="glyphicon glyphicon-edit"></i> Edit
                        </Button>
                    </td>
                    <td>
                        <Button id={business.id} onClick={this.deleteBusiness.bind(this)} bsStyle="danger" block><i className="glyphicon glyphicon-trash"></i></Button>
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
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header>
                                        <Modal.Title>Edit Business</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form id={this.state.business_id} method="POST" className="form" onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" id="business-addon">Business Name</span>
                                                    <input type="text" className="form-control" name="name" id="name" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="Business Name" aria-describedby="business-addon" required="required"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" id="location-addon">Location</span>
                                                    <input type="text" className="form-control" name="location" id="location" value={this.state.location} onChange={this.handleChange.bind(this)} placeholder="Business Location" aria-describedby="location-addon" required="required"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" id="category-addon">Business Category</span>
                                                    <input type="text" className="form-control" name="category" id="category" value={this.state.category} onChange={this.handleChange.bind(this)} placeholder="Business Name" aria-describedby="category-addon" required="required"/>  
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" id="description-addon">Description</span>
                                                    <textarea className="form-control" name="description" id="description" value={this.state.description} onChange={this.handleChange.bind(this)} placeholder="Describe your Business" aria-describedby="description-addon"
                                                        required="required"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <Button type="reset" onClick={this.handleReset} className="pull-left"><i className="glyphicon glyphicon-refresh"></i> Reset</Button>
                                                <Button type="submit" className="pull-right" bsStyle="primary"><i className="glyphicon glyphicon-edit"></i> Edit Business</Button>
                                                <div className="clearfix"></div>
                                            </div>
                                        </form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={this.handleClose}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
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