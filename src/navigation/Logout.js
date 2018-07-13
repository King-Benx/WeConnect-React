import React from "react";
import { Link } from "react-router-dom";

const Logout = () => (
  // JSX returned
  <li>
    <Link to="/logout">
      <b>
        <i className="glyphicon glyphicon-log-out" /> Logout
      </b>
    </Link>
  </li>
);
export default Logout;
