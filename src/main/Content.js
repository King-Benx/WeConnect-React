import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../containers/user/LandingPage";
import LoginPage from "../containers/user/LoginPage";
import UnknownPage from "../common/UnknownPage";
import ServerErrorPage from "../common/ServerErrorPage";
import Dashboard from "../containers/user/Dashboard";
import CreateBusiness from "../containers/business/CreateBusiness";
import OwnedBusinesses from "../containers/business/OwnedBusinesses";
import AllBusinesses from "../containers/business/Businesses";
import Logout from "../containers/user/Logout";
import Reviews from "../containers/review/Reviews";
import SearchResults from "../containers/business/SearchResults";
import ResetPassword from "../containers/user/ResetPassword";

const Content = () => {
  return (
    // JSX returned and  define routes with components
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/500" component={ServerErrorPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/create_business" component={CreateBusiness} />
        <Route exact path="/owned_businesses" component={OwnedBusinesses} />
        <Route exact path="/all_businesses" component={AllBusinesses} />
        <Route exact path="/all_businesses/:id/reviews" component={Reviews} />
        <Route exact path="/logout" component={Logout} />
        <Route
          exact
          path="/search/:search/:filter_type/:filter_value"
          component={SearchResults}
        />
        <Route exact path="/search/:search/*" component={SearchResults} />
        <Route exact path="/reset_password" component={ResetPassword} />
        <Route component={UnknownPage} />
      </Switch>
    </div>
  );
};
export default Content;
