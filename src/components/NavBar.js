// /////////  CLASS BASED COMPONENT   //////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect, browserHistory } from "react-router-dom";
import Cookies from "js-cookie";
// import PropTypes from 'prop-types';
import Authentication from "./Authentication";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   redirect: true,
    //   authentication: true,
    // };
    // this.handleClick = this.handleClick.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  setRedirect = () => {
    this.setState({
      redirect: false,
      authentication: false,
    });
    Cookies.remove("user");
    return <Redirect to="/login" />;
  };
  // renderRedirect = () => {
  //   if (!this.state.redirect) {
  //     Cookies.remove("user");
  //     return <Redirect to="/login" />;
  //   }
  // };

  // LogOut() {
  //   Authentication.logout(() => {
  //     Cookies.remove("user");
  //     // return <Redirect to="/login" />;
  //     this.props.history.push("/login");
  //   });
  // }

  // handleClick() {
  //   this.LogOut();
  // }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/news/general">
              News App
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/news/general"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="form-group">
            {/* {this.renderRedirect()} */}
            <button
              type="submit"
              style={{ width: "100%" }}
              className="btn btn-primary btn-sm"
              onClick={this.handleClick}
              onClick={!this.authentication ? this.setRedirect : "do nothing"}
            >
              Log Out
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
