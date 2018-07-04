import React from 'react';
import {Link} from 'react-router-dom';

const Logout = ()=>(
    <li>
        <Link to='/logout'>
            <b><i className="glyphicon glyphicon-log-out"></i> Logout</b>
        </Link>  
    </li>
)
export default Logout;