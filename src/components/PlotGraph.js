import React from "react";

// Using dx-react-chart to display the line graph which also uses the @material-ui/core package
// found here: https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/getting-started/
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries
} from "@devexpress/dx-react-chart-material-ui";

export default function PlotGraph(props) {
  return (
    <div
      className="plot"
      style={{
        backgroundColor: "pink",
        width: "80%",
        margin: "20px auto",
        borderRadius: "5%"
      }}
    >
      <h1>Current function expression being graphed: y = {props.currFunc}</h1>
      <Chart data={props.data}>
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="value" argumentField="argument" />
      </Chart>
    </div>
  );
}
