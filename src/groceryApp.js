import React from "react";
import "./groceryApp.css";
import ProductMenu from "./productMenu.js";
import ShoppingCart from "./shoppingCart.js";
import Summary from "./summary.js";

class GroceryApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "List of items (Maximum 10 quantities available per item)",
      items: [
        "milk",
        "coffee",
        "soda",
        "apple",
        "rice",
        "lentil",
        "potato",
        "mango",
        "tea",
        "biscuits",
        "oil",
        "lemon",
        "cereal",
        "bread",
        "chips",
        "eggs",
        "powder",
        "chocolate",
        "pasta",
        "cheese"
      ],
      clickedIndex: "",
      shoppingArray: [],
      count: 0,
      showSummary: false,
      hideShoppingCart: true,
      hideProductMenu: true
    };
  }

  addToShoppingCart = index => {
    console.log(index);
    console.log(this.state.items[index], this.state.shoppingArray);
    let shoppingArray = this.state.shoppingArray;
    console.log("fun is running");
    // if item is not there already
    if (this.state.shoppingArray.indexOf(this.state.items[index]) === -1) {
      shoppingArray.push(this.state.items[index]);
      // console.log(shoppingArray);
      this.setState({
        clickedIndex: index,
        shoppingArray: [...this.state.shoppingArray, this.state.items[index]]
      });
    }

    console.log(this.state.shoppingArray);
  };

  addCount() {
    console.log(this.state.shoppingArray);
    this.setState({
      count: this.state.count + 1
    });
    console.log(this.state.count);
  }

  addToSummary() {
    console.log("add to summary");
    console.log(this.state.shoppingArray);
    this.setState({
      showSummary: true,
      data: "",
      hideShoppingCart: false,
      hideProductMenu: false
    });
  }

  delItem = index => {
    console.log(index);

    this.setState({
      shoppingArray: this.state.shoppingArray.filter(index => index !== index)
    });
  };
  render() {
    return (
      <div className="groceryAppdiv">
        <p> {this.state.heading} </p>{" "}
        {this.state.hideProductMenu ? (
          this.state.items.map((str, index) => (
            <ProductMenu
              data={str}
              index={index}
              onClickItem={() => this.addToShoppingCart(index)} // passing the index
            />
          ))
        ) : (
          <p> Summary </p>
        )}{" "}
        {this.state.hideShoppingCart ? (
          <ShoppingCart
            index={this.state.clickedIndex}
            data={this.state.shoppingArray}
            delItem={this.delItem}
            item={this.state.items}
            addToSummary={this.addToSummary.bind(this)}
          />
        ) : null}{" "}
        {this.state.showSummary ? (
          <Summary data={this.state.shoppingArray} />
        ) : null}{" "}
      </div>
    );
  }
}

export default GroceryApp;
