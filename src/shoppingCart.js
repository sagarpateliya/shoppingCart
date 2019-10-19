import React from "react";

import "./shoppingCart.css";
import Button from "./button.js";
// import Summary from "./summary.js";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "Shopping Cart",
      showComponent: true
    };
  }

  addToSummary() {
    this.props.addToSummary();
    console.log("add to summary is runnig in Summary");
    this.setState({
      showComponent: true
    });
  }

  render() {
    return (
      <div className="shoppingCart">
        <div className="heading">{this.state.heading} 🛒</div>

        {this.props.data.map(val => (
          <li>
            {" "}
            {val}{" "}
            <Button
              data={this.props.data}
              delItem={this.props.delItem}
              index={this.props.index}
            />
          </li>
        ))}
        <button onClick={this.addToSummary.bind(this)}>Add to summary</button>
      </div>
    );
  }
}

export default ShoppingCart;
