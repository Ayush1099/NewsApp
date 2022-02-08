import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Login";
import News from "./News";
// import ProtectedNews from "./ProtectedNews";

export class Routes extends Component {
  constructor(props) {
    super(props);
    // console.log("===> Routes Constructor");
    // this.state = {
    //   authentication: this.props.authentication,
    // };
    // console.log("===>Routes authentication : ", this.state.authentication);
    this.state = {name: ""}
     this.handleCallback=this.handleCallback.bind(this);

  }

  handleCallback = (authentication) => {
    this.setState({ name: authentication},()=>{const {name} = this.state;console.log("===>Routes authentication : ", name);} );
    // const {name} = this.state;
    // console.log("===>Routes authentication : ", name);
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/news/:subcategory"
              render={() =>this.state.name ? <News /> : <Redirect to="/login" />}
            />

            <Route exact path="/login">
              <Login parentCallback={this.handleCallback} />
            </Route>
            {/* <Route exact path="/login" component={Login} />
            <ProtectedNews exact path="/news/:subcategory" component={News} /> */}

            {/* <Route exact path="/news" render={props => <News {...props} />}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
