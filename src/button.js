import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    };
  }
  componentDidUpdate() {
    console.log(this.props);
  }

  countIncrement() {
    console.log("function is running!");
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    }
  }
  countDecrement() {
    console.log("function2 is running!");

    // this.setState({ this.state.count == 0 ? count = 0: count: this.state.count - 1 });
    this.state.count === 0
      ? this.setState({ count: 0 })
      : this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="buttonDiv">
        <div className="buttons">
          <button onClick={this.countIncrement.bind(this)}> + </button>{" "}
          <button onClick={this.countDecrement.bind(this)}> - </button>{" "}
          <button onClick={() => this.props.delItem(this.props.index)}> X</button>{" "}
          {this.state.count}
        </div>{" "}
      </div>
    );
  }
}

export default Button;
