import React from "react";
import { Link } from "react-router-dom";
class ServerErrorPage extends React.Component {
  render() {
    return (
      <div classNameName="row">
        <h1 className="text-center">
          <em>WeConnect</em>
        </h1>

        <div className="alert alert-danger error_handler" role="alert">
          <h4 className="text-center">
            Ohh Snap error 500! Internal Server Error
          </h4>
        </div>
        <div className="text-center">
          <Link to="/">
            <i className="glyphicon glyphicon-home" /> Head Back Home!
          </Link>
        </div>
      </div>
    );
  }
}
export default ServerErrorPage;
