import React, { Component } from "react"; //imrc
import { CartContext } from "../PlaceOrder/CartContextProvider";
import "./NavBar.css";

class NavBar extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { item, size, increment } = this.context;
    return (
      <div className="navbar_component">
        <div className="navbar_logo"></div>
        <div className="navbar_locator">
          <div className="navbar_locatorImage"></div>
          <div className="navbar_location">Banglore</div>
        </div>

        <div className="navbar_searchcomponent">
          <div>
            <select className="nav_dropdown">
              <option value="All">All</option>
              <option value="Alexa">Alexa</option>
              <option value="Books">Books</option>
              <option value="Baby">Baby</option>
              <option value="Beauty">Beauty</option>
              <option value="Clothes">Clothes</option>
            </select>
          </div>
          <div>
            <input className="navbar_searchbox" type="text" />
          </div>
          <div className="navbar_searchboxdiv">
            <div className="navbar_searchicon" />
          </div>
        </div>

        <div className="navbar_text navbar_signin">
          <div style={{ fontSize: "14px" }}>Hello,</div>
          <div style={{ fontWeight: "bold" }}>Account & Lists</div>
        </div>

        <div className="navbar_text navbar_returns">
          <div style={{ fontSize: "14px" }}>Returns</div>
          <div style={{ fontWeight: "bold" }}>& Orders</div>
        </div>

        <div className="navbar_text navbar_cart">
          <div className="cart_image"></div>
          <div className="cart_item">{ size }</div>
          <div className="navbar_text_cart">Cart</div>
        </div>
      </div>
    );
  }
}
export default NavBar;
