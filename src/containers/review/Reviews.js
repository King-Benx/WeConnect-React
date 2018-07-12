import React from 'react';
import { Button } from 'react-bootstrap';
import CustomFunctions from '../../custom/CustomFunctions';
import DashboardNavigation from '../../navigation/DashboardNavigation';
import { BASE_URL } from '../../custom/constants';
import axios from 'axios';
import BusinessInfo from '../business/BusinessInfo';
import ReviewInfo from './ReviewInfo';

class Reviews extends React.Component{
    constructor(props){
        super(props);
        this.state={
            review:"",
            reviews:[],
            business:[],
            id:this.props.match.params.id
        }
    }

    handleChange = (event) => {
        // handles change of state on input change
        this.setState({[event.target.id]: event.target.value});
    }

    componentDidMount(){
        // populates the business information and the reviews
        axios
        .get(BASE_URL+'api/v1/businesses/'+ this.state.id, 
        {headers:{ 'x-access-token':CustomFunctions.getToken()}})
        .then(res => {
            if (res.status === 404){
                this.setState({ business:[] });
            }else if(res.status === 200){
                this.setState({ business:res.data.business_info });
            }
        })
        .catch(err => {
            CustomFunctions.createNotifications(err.status, err.response.data.message);      
        });

        axios
        .get(BASE_URL+'api/v1/businesses/'+ this.state.id +'/reviews',
         {headers:{ 'x-access-token':CustomFunctions.getToken()}})
         .then(res => {
            if (res.status === 404){
                this.setState({ reviews:[] });
            }else if(res.status === 200){
                this.setState({ reviews:res.data.reviews.business_reviews });
            }
         })
        .catch(err => {
            CustomFunctions.createNotifications(err.status, err.response.data.message);     
        });
    };

    formSubmit = (event) => {
        // handles form submit of the reviews
        event.preventDefault();
        axios
            .post(BASE_URL+'api/v1/businesses/'+ this.state.id +'/reviews', { review:this.state.review },
            {headers:{ 'x-access-token':CustomFunctions.getToken()}})
            .then(res => {
                CustomFunctions.createNotifications(res.status, res.data.message);
                this.setState({ review:"" });
                this.componentDidMount();
            })
            .catch(err => {
                CustomFunctions.createNotifications(err.status, err.response.data.message);
            });
    }

     render(){
        const div_data= this.state.reviews.map(((review)=>{ 
            // iterates through the reviews object
            return(
                <ReviewInfo review={ review }/>
            );
        }));   
        return (
                <div className="row"> 
                    <DashboardNavigation/>
                    <div className="col-sm-9 content-wrapper">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <div className="row">
                                    <BusinessInfo business={ this.state.business } />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-8">
                                {div_data}
                                <form method="POST" className="form" onSubmit={ this.formSubmit }>
                                    <legend className="text-info">Leave a review</legend>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-9">
                                                <textarea name="review" id="review" value={ this.state.review } onChange={ this.handleChange } className="form-control" required="required" placeholder="Leave Review Here" ></textarea>
                                            </div>
                                            <div className="col-sm-3">
                                                <Button type="submit" bsStyle="success" block><i className="glyphicon glyphicon-plus" type="submit"></i> Add Review</Button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>      
                            </div>    
                        </div>
                    </div>
            );

    }
}
export default Reviews;