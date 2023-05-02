import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { withRouter } from "react-router-dom";
import "./NavBar.css";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: true,
      showMediaIcons: false,
    };
    this.renderRedirect = this.renderRedirect.bind(this);
    this.sideNavbar = this.sideNavbar.bind(this);
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      Cookies.remove("Ayush");
      this.props.history.push("/login");
    }
  };

  sideNavbar = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  render() {
    return (
      <div className="topnav fixed-top navbar-expand-lg" id="myTopnav">
        <ul className="nav me-auto mb-2 mb-lg-0">
          <li onClick={this.props.handleNewsType} className="nav-item">
            <Link className="navbar-brand" to="/news/general">
              News App
            </Link>
          </li>

          <li onClick={this.props.handleNewsType} className="nav-item">
            <Link className="nav-link" to="/news/business">
              Business
            </Link>
          </li>

          <li onClick={this.props.handleNewsType} className="nav-item">
            <Link className="nav-link" to="/news/entertainment">
              Entertainment
            </Link>
          </li>

          <li onClick={this.props.handleNewsType} className="nav-item">
            <Link className="nav-link" to="/news/general">
              General
            </Link>
          </li>

          <li onClick={this.props.handleNewsType} className="nav-item">
            <Link className="nav-link" to="/news/health">
              Health
            </Link>
          </li>

          <li onClick={this.props.handleNewsType} className="nav-item">
            <Link className="nav-link" to="/news/science">
              Science
            </Link>
          </li>

          <li onClick={this.props.handleNewsType} className="nav-item">
            <Link className="nav-link" to="/news/sports">
              Sports
            </Link>
          </li>

          <li onClick={this.props.handleNewsType} className="nav-item">
            <Link className="nav-link" to="/news/technology">
              Technology
            </Link>
          </li>

          <li className="icon" onClick={this.sideNavbar}>
            <a className="icon">
              <i className="fa fa-bars"></i>
            </a>
          </li>
          <li>
            <a
              type="submit"
              className="btn-primary"
              id="submit"
              onClick={() => this.renderRedirect()}
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(NavBar);
