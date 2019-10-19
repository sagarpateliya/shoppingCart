import React from "react";
import "./item.css";

class ProductMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideProductMenu: true
    };
  }

  hideProductMenu() {
    console.log("hide product menu is running");
    this.setState({
      hideProductMenu: false
    });
  }

  click() {
    this.props.onClickItem(this.props.index);
    console.log("click");
  }

  render() {
    return (
      <div className="Itemdiv" onClick={this.click.bind(this)}>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default ProductMenu;
