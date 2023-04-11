import React, { useContext } from "react";
import "./Checkout.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CheckoutItems from "./CheckoutItems";
import { CartContext } from "../PlaceOrder/CartContextProvider";

function Checkout(props) {
  const { item, size, increment } = useContext(CartContext);

  const cartValue = function () {
    let price = 0;
    for (let i = 0; i < item.length; i++) {
      price += Math.floor(item[i].price);

    }
    console.log(price)
    return price;
  };
  return (
    <div className="checkout_body">
      <Grid container>
        <Grid item={10}>
          <div className="checkout_container">
            <div
              style={{
                fontWeight: "500",
                fontSize: "30px",
                padding: "20px 0px 0px 20px",
              }}
            >
              Shopping Cart
            </div>
            <div>
              {item.map((value) => (
                <CheckoutItems definition={value} />
              ))}
            </div>
          </div>
        </Grid>
        <Grid item={2}>
          <div
            style={{
              width: "300px",
              marginTop: "25px",
              height: "200px",
              padding: "20px",
              backgroundColor: "white",
            }}
          >
            <div style={{ fontSize: "26px" }}>
              Subtotal ( {size} items): <strong>{ cartValue() }</strong>
            </div>
            <div style={{ paddingTop: "25px" }}>
              <button className="placeholder_button">Proceed to buy</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Checkout;
