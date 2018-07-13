import React from "react";
import { Link } from "react-router-dom";

const Login = () => (
  // JSX returned
  <li>
    <Link to="/login">
      <b>
        <i className="glyphicon glyphicon-log-in" /> Login
      </b>
    </Link>
  </li>
);
export default Login;
