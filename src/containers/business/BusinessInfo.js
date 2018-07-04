import React from 'react';
import brief_case from '../../images/briefcase.ico';
import { Image } from 'react-bootstrap';

class BusinessInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() { 
        return (
        <div className="col-xs-12">
            <Image src={ brief_case } alt="" thumbnail responsive/>
            <h4><b>Business name: </b> <span className="text text-info">{ this.props.business.name }</span></h4>
            <h4><b>Category: </b> <span className="text text-info">{ this.props.business.category }</span></h4>
            <h4><b>Location: </b> <span className="text text-info">{ this.props.business.location }</span></h4>
            <h4><u>Description</u></h4>
            <p className="text text-info">{ this.props.business.description }</p>
        </div>  )
    }
}
 
export default BusinessInfo;