import React from "react";

export default function History(props) {
  return (
    <div className="history">
      <h6 style={{ marginBottom: 0 }}>History</h6>
      {props.funcHistory.map((value, index) => (
        <button
          type="button"
          key={index}
          onClick={props.handleHistory}
          value={value}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
