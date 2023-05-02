import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Login from "./Login";
import News from "./News";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedLogin from "./ProtectedLogin";

export class Routes extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <ProtectedRoute exact path="/news/:subcategory" component={News} />
            <ProtectedRoute exact path="/news" component={News} />
            <ProtectedLogin exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
