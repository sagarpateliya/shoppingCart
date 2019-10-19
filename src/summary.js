import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./summary.css";

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "Summary"
    };
  }
  render() {
    return (
      <div className="SummaryDiv">
        <p> {this.state.heading} </p>{" "}
        {this.props.data.map(v => (
          <p> {v} </p>
        ))}{" "}
      </div>
    );
  }
}

export default Summary;
