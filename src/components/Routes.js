import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from "./News";

export class RouteComponent extends Component {

  render() {
    return (
        <Router>
            <Route exact path="/news/:subcategory" component={News}/>
            <Route exact path="/news" component={News} />
        </Router>
    );
  }
}

export default RouteComponent;
