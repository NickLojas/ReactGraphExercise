import React, { Component } from "react";
import PlotGraph from "./PlotGraph";
import History from "./History";
import FieldManager from "./FieldManager";

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
    this.resetFields = this.resetFields.bind(this);
    this.generateGraph = this.generateGraph.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleHistory(e) {
    this.setState({ func: e.target.value });
  }

  resetFields() {
    this.setState({ func: "x", lowRange: 1, highRange: 10 });
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
      for (let i = lowRange; i <= highRange; i++) {
        newGraph.push({
          argument: i,
          value: this.functionFromExpression(i)
        });
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
    const {
      lowRange,
      highRange,
      func,
      currFunc,
      data,
      funcHistory
    } = this.state;
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
          *If the graph goes blank, try reducing the range
        </p>
        <FieldManager
          lowRange={lowRange}
          highRange={highRange}
          func={func}
          handleChange={this.handleChange}
          generateGraph={this.generateGraph}
          resetFields={this.resetFields}
        />
        <History funcHistory={funcHistory} handleHistory={this.handleHistory} />
        <PlotGraph data={data} currFunc={currFunc} />
      </div>
    );
  }
}

export default Graph;
