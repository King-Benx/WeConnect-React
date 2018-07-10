import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import CustomFunctions from '../../custom/CustomFunctions';
import { BASE_URL } from '../../custom/constants';
import DashboardNavigation from '../../navigation/DashboardNavigation';
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
    handleReset = (event) => {
        // handles reset of edit business form
        this.setState({ name:"", location:"",category:"",description:"" });
    }

    handleChange = (event) => {
        // handles change of state on input change in edit business form
        this.setState({ [event.target.id]: event.target.value });
    }

    handleClose() {
        // handles closing of the modal form
        this.setState({ show: false });
      }
    
    handleShow= (event) => {
        // handles the showing of the modal form
        axios
        .get(BASE_URL+'api/v1/businesses/'+event.target.id,
        {headers: {'x-access-token':CustomFunctions.getToken()}})
        .then(res => {
            this.setState({
                show:true ,
                business:res.data.business_info,
                business_id:res.data.business_info.id,
                name:res.data.business_info.name,
                location:res.data.business_info.location,
                category:res.data.business_info.category,
                description:res.data.business_info.description,
            })
        })
        .catch(err => {
            CustomFunctions.createNotifications(err.status, err.toString());
        });
    }
    
    componentDidMount(){
        // populates the business information
        axios
        .get(BASE_URL+'api/v1/owned_businesses',
        {headers:{'x-access-token':CustomFunctions.getToken()}})
        .then( res => {
            if (res.status === 404){
                this.setState({owned_businesses:[],show:false});
            }else if(res.status === 200){
                this.setState({owned_businesses:res.data.results.businesses,show:false});
            }
        })
        .catch(err =>{
            CustomFunctions.createNotifications(err.status, err.response.data.message);        
        });
    } 

    showReviews = (event) => {
        // handles redirection to the businesses' reviews
        this.props.history.push('/all_businesses/'+event.target.id+'/reviews');
    }

    deleteBusiness = (event) => {
        // deletes a particular business
        axios
        .delete(BASE_URL+'api/v1/businesses/'+event.target.id,
        {headers: {'x-access-token':CustomFunctions.getToken()}})
        .then(res => {
            CustomFunctions.createNotifications(res.status, res.data.message);
            this.componentDidMount()
        });
    }

    handleSubmit = (event) => {
        // handles the submit of edit business
        event.preventDefault();
        axios
            .put(BASE_URL+'api/v1/businesses/'+this.state.business_id,
            {name:this.state.name,location:this.state.location, description:this.state.description, category:this.state.category},
            {headers:{'x-access-token':CustomFunctions.getToken()} })
            .then(res => {
                CustomFunctions.createNotifications(res.status, res.data.message);
                this.componentDidMount()
            });
        }

    render(){
        const table_data= this.state.owned_businesses.map(((business)=>{

            return(
                <tr key={ business.id.toString() }>
                    <td>{ business.last_modified.toString().replace('GMT','') }</td>
                    <td>{ business.name }</td>
                    <td>{ business.location }</td>
                    <td>{ business.category }</td>
                    <td>{ business.description }</td>
                    <td>
                        <Button id={ business.id } onClick={ this.showReviews } bsStyle="info" block>
                            <i className="glyphicon glyphicon-star" id={ business.id } onClick={ this.showReviews }></i> Reviews
                        </Button>
                    </td>
                    <td>
                        <Button id={ business.id } bsStyle="warning" onClick={ this.handleShow } block>
                            <i className="glyphicon glyphicon-edit" id={ business.id } onClick={ this.handleShow }></i> Edit
                        </Button>
                    </td>
                    <td>
                        <Button id={ business.id } onClick={ this.deleteBusiness } bsStyle="danger" block><i className="glyphicon glyphicon-trash" id={ business.id } onClick={ this.deleteBusiness }></i></Button>
                    </td>
                </tr>
            );
        }));
        return ( 
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
                                <Modal show={ this.state.show } onHide={ this.handleClose }>
                                    <Modal.Header>
                                        <Modal.Title>Edit Business</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form id={ this.state.business_id } method="POST" className="form" onSubmit={ this.handleSubmit }>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" id="name" value={ this.state.name } onChange={ this.handleChange } placeholder="Business Name" aria-describedby="business-addon" required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="location" id="location" value={ this.state.location } onChange={ this.handleChange } placeholder="Business Location" aria-describedby="location-addon" required="required"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="category" id="category" value={ this.state.category } onChange={ this.handleChange } placeholder="Business Category" aria-describedby="category-addon" required="required"/>  
                                            </div>
                                            <div className="form-group">
                                                    <textarea className="form-control" name="description" id="description" value={ this.state.description } onChange={ this.handleChange } placeholder="Describe your Business" aria-describedby="description-addon"
                                                        required="required"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <Button type="reset" onClick={ this.handleReset } className="pull-left"><i className="glyphicon glyphicon-refresh" onClick={ this.handleReset }></i> Reset</Button>
                                                <Button type="submit" className="pull-right" bsStyle="warning"><i className="glyphicon glyphicon-edit" type="submit"></i> Edit Business</Button>
                                                <div className="clearfix"></div>
                                            </div>
                                        </form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={ this.handleClose }>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default OwnedBusinesses;