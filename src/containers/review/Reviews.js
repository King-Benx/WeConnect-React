import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import CustomFunctions from '../../custom/CustomFunctions';
import DashboardNavigation from '../../navigation/DashboardNavigation';
import comment_icon from '../../images/comment-icon.jpg';
import { BASE_URL } from '../../custom/constants';
import superagent from 'superagent';
import BusinessInfo from '../business/BusinessInfo';

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
        this.setState({[event.target.id]: event.target.value});
    }

    componentDidMount(){
        superagent
        .get(BASE_URL+'api/v1/businesses/'+ this.state.id)
        .set({ 'x-access-token':JSON.parse(localStorage.getItem('data')).token })
        .end((err,res) => {
            if(err){ CustomFunctions.createNotifications(err.status, res.body.message) };
            if (res.status === 404){
                this.setState({ business:[] });
            }else if(res.status === 200){
                this.setState({ business:res.body.business_info });
            }
        });

        superagent
        .get(BASE_URL+'api/v1/businesses/'+ this.state.id +'/reviews')
        .set({ 'x-access-token':JSON.parse(localStorage.getItem('data')).token })
        .end((err,res) => {
            if(err){ CustomFunctions.createNotifications(err.status, err.toString()) };
            if (res.status === 404){
                this.setState({ reviews:[] });
            }else if(res.status === 200){
                this.setState({ reviews:res.body.reviews.business_reviews });
            }
        });
    };

    formSubmit = (event) => {
        event.preventDefault();
        superagent
            .post(BASE_URL+'api/v1/businesses/'+ this.state.id +'/reviews')
            .send({ review:this.state.review })
            .set({'x-access-token':JSON.parse(localStorage.getItem('data')).token})
            .end((err,res)=>{
                if(err){ CustomFunctions.createNotifications(err.status, err.toString()); };
                CustomFunctions.createNotifications(res.status, res.body.message);
                this.setState({ review:"" });
                this.componentDidMount();
        });
    }

     render(){
        const div_data= this.state.reviews.map(((review)=>{
            return(
                <div key={review.id} className="row">
                    <div className="col-xs-2">
                        <Image src={ comment_icon } alt="" responsive circle/>
                    </div>
                    <div className="col-xs-10">
                        <h4 className="list-group-item-heading">Author: <span className="text-primary">{ review.author }</span></h4>
                        <blockquote className="list-group-item-text">{ review.review }</blockquote>
                        <small className="text text-right text-primary">{ review.last_modified }</small>
                        <hr/>
                    </div>
                    <br/>
                </div>
            );
        }));   
        return (
                CustomFunctions.checkAuthentication()? (   
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
                                                <Button type="submit" bsStyle="success" block><i className="glyphicon glyphicon-plus"></i> Add Review</Button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>      
                            </div>    
                        </div>
                    </div>
                ): <Redirect to={{pathname:'/login'}}/>
            );

    }
}
export default Reviews;