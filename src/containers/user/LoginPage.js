import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../custom/constants";
import CustomFunctions from "../../custom/CustomFunctions";
class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }

  handleChange = event => {
    // handles change of state on input change
    this.setState({ [event.target.id]: event.target.value });
  };

  handleReset = event => {
    // handles reset of the login form
    this.setState({ email: "", password: "" });
  };

  formSubmit = event => {
    // handles form submit of login page
    event.preventDefault();
    axios
      .post(BASE_URL + "api/v1/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        CustomFunctions.storeToken(res.data.message.token);
        this.setState();
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        CustomFunctions.createNotifications(
          err.status,
          err.response.data.message
        );
      });
  };

  render() {
    return (
      // JSX returned
      <div className="row">
        <h1 className="text-center">
          <em>WeConnect</em>
        </h1>
        <div id="login-panel" className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Login</h3>
          </div>
          <div className="panel-body">
            <form method="POST" className="form" onSubmit={this.formSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  value={this.state.email}
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                  placeholder="Enter email eg. johndoe@mail.com"
                  aria-describedby="email-addon"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  name="password"
                  id="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                  aria-describedby="password-addon"
                  required="required"
                />
              </div>
              <div className="form-group">
                <Button
                  type="reset"
                  onClick={this.handleReset}
                  className="pull-left"
                >
                  <i className="glyphicon glyphicon-refresh" /> Reset
                </Button>
                <Button type="submit" className="pull-right" bsStyle="success">
                  <i className="glyphicon glyphicon-log-in" /> Login
                </Button>
                <div className="clearfix" />
              </div>
            </form>
            <div className="text-center">
              <Link to="/">Not a member? Register Today!</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginPage;
