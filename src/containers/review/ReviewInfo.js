import React from 'react';
import comment_icon from '../../images/comment-icon.jpg';
import { Image } from 'react-bootstrap';

class ReviewInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() { 
        return (
            // JSX returned
            <div key={this.props.review.id} className="row">
                <div className="col-xs-2">
                    <Image src={ comment_icon } alt="" responsive circle/>
                </div>
                <div className="col-xs-10">
                    <h4 className="list-group-item-heading">Author: <span className="text-primary">{ this.props.review.author }</span></h4>
                    <blockquote className="list-group-item-text">{ this.props.review.review }</blockquote>
                    <small className="text text-right text-primary">{ this.props.review.last_modified }</small>
                    <hr/>
                </div>
                <br/>
            </div> 
        )
    }
}
 
export default ReviewInfo;