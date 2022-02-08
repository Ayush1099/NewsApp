// //////////CLASS BASED COMPONENTS///////////////////////////////////////////////////////////

import React, { Component } from "react";
import Routes from "./components/Routes";

export default class App extends Component {

  constructor(){
    super();
    this.state={
      authentication:true
    }
  }

  render() {
    return (
      <div>
        <Routes/>
        {/* <Routes authentication={this.state.authentication}/> */}
      </div>
    );
  }
}
