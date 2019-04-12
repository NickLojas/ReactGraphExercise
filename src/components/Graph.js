import React, { Component } from "react";
import PlotGraph from "./PlotGraph";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      func: "x",
      currFunc: "x",
      funcHistory: [],
      lowRange: 1,
      highRange: 10,
      data: [{ argument: 1, value: 1 }]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleHistory = this.handleHistory.bind(this);
    this.generateGraph = this.generateGraph.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
  }

  handleHistory(e) {
    this.setState({ func: e.target.value });
  }

  functionFromExpression(x) {
    const { func } = this.state;

    let newFunc = func.replace("sin(x)", "Math.sin(x)");
    newFunc = newFunc.replace("cos(x)", "Math.cos(x)");
    return eval(newFunc);
  }

  generateGraph(e) {
    e.preventDefault();

    let newGraph = [];
    const { currFunc, funcHistory, func, lowRange, highRange } = this.state;

    try {
      for (var i = lowRange; i < highRange; i++) {
        newGraph[i - 1] = {
          argument: i,
          value: this.functionFromExpression(i)
        };
      }

      if (funcHistory.indexOf(func) === -1) {
        funcHistory.push(func);
      }

      this.setState({
        data: newGraph,
        currFunc: func
      });
    } catch (error) {
      alert("Invalid expression");
      this.setState({ func: currFunc });
    }
  }

  render() {
    const { currFunc, data } = this.state;
    return (
      <div>
        <h6>Reminder:</h6>
        <p style={{ marginTop: -25 }}>
          For multiplying, make sure to use the asterisk (ie. y=2x becomes
          y=2*x)
        </p>
        <h4>
          First, you can change the range of the graph here (starts at x=1)
        </h4>
        <p style={{ marginTop: -25 }}>
          If the graph goes blank, try reducing the range
        </p>
        <div className="rangeInputs">
          <input
            name="lowRange"
            type="number"
            value={this.state.lowRange}
            onChange={this.handleChange}
            style={{ width: "3%" }}
          />
          <input
            name="highRange"
            type="number"
            value={this.state.highRange}
            onChange={this.handleChange}
            style={{ width: "3%" }}
          />
        </div>
        <h4>
          Now, enter your mathematical function, then click Graph to display the
          expression on the graph below
        </h4>
        <form onSubmit={this.generateGraph} style={{ marginTop: -20 }}>
          y ={" "}
          <input
            name="func"
            type="text"
            value={this.state.func}
            onChange={this.handleChange}
          />
          <div className="buttons">
            <button type="submit">Graph</button>
            <button
              type="button"
              onClick={() =>
                this.setState({ func: "x", lowRange: 1, highRange: 10 })
              }
            >
              Reset
            </button>
          </div>
        </form>
        <div className="history">
          <h6 style={{ marginBottom: 0 }}>History</h6>
          {this.state.funcHistory.map((value, index) => (
            <button
              type="button"
              key={index}
              onClick={this.handleHistory}
              value={value}
            >
              {value}
            </button>
          ))}
        </div>
        <PlotGraph data={data} currFunc={currFunc} />
      </div>
    );
  }
}

export default Graph;
