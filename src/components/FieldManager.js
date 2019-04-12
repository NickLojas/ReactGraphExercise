import React from "react";

export default function FieldManager(props) {
  return (
    <div>
      <div className="rangeInputs">
        <input
          name="lowRange"
          type="number"
          value={props.lowRange}
          onChange={props.handleChange}
          style={{ width: "3%" }}
        />
        <input
          name="highRange"
          type="number"
          value={props.highRange}
          onChange={props.handleChange}
          style={{ width: "3%" }}
        />
      </div>
      <h4>
        Now, enter your mathematical function, then click Graph to display the
        expression on the graph below
      </h4>
      <form onSubmit={props.generateGraph} style={{ marginTop: -20 }}>
        y ={" "}
        <input
          name="func"
          type="text"
          value={props.func}
          onChange={props.handleChange}
        />
        <div className="buttons">
          <button type="submit">Graph</button>
          <button type="button" onClick={props.resetFields}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
