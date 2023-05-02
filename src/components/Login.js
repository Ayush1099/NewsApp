import React from "react";
import "./LoginStyle.css";
import Cookies from "js-cookie";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      redirect: false,
      authentication: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm =
      this.submituserRegistrationForm.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      Cookies.set("Ayush", "Verma");
      this.props.history.push("/news/general");
    }
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();

    const { formfieldvalidation, errors } = this.validateForm();

    if (formfieldvalidation) {
      let fields = {};
      fields["username"] = "";
      fields["password"] = "";
      this.setState(
        { fields: fields, authentication: true, redirect: true },
        () => {
          this.renderRedirect();
        }
      );
    } else {
      this.setState({ errors });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    const response = { authentication: false, redirect: false, errors: "" };
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }
    response.errors = errors;
    response.formfieldvalidation = formIsValid;

    return response;
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="signup-form">
          <form
            method="post"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
            style={{ marginTop: "12%" }}
          >
            <h3>Login Page</h3>
            <div className="form-group">
              <div className="input-group-prepend">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  value={this.state.fields.username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="errorMsg">{this.state.errors.username}</div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.state.fields.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="errorMsg">{this.state.errors.password}</div>

            <div className="form-group">
              <button
                type="submit"
                style={{ width: "100%" }}
                className="btn btn-primary btn-block"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
