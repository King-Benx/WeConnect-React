import React from "react";
import { Link } from "react-router-dom";
import SwitchBtnLoginLogoutButton from "../navigation/SwitchBtnLoginLogoutButton";

const NavBar = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-ex1-collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link className="navbar-brand" to="/">
          WeConnect
        </Link>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <SwitchBtnLoginLogoutButton />
      </div>
    </nav>
  );
};
export default NavBar;
