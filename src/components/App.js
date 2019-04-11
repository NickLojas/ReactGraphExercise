import React, { Component } from "react";
import Graph from "./Graph";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <h1>Plot a Mathematical Function</h1>
        <h3>Created by Nick Lojas</h3>
        <Graph />
      </div>
    );
  }
}

export default App;
