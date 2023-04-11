import React, { useContext } from "react";
import "./PlaceOrder.css";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContextProvider";

function PlaceOrder() {
  const { item, size, increment } = useContext(CartContext);
  const [productDetails, setProductDetails] = useState([]);
  let { id } = useParams();

  const addToCart = function () {
    increment(productDetails);
  };

  useEffect(() => {
    let list = [
      {
        id: "1",
        name: "New Apple Iphone X",
        rating: "35656",
        review: "1000",
        emi: "3999",
        delivery: "Wednesday, Aug 18",
        price: "48999",
        status: "In Stock",
        soldby: "Chagan Electronics",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Una2uHjt811jPQGfRPDMuD9kaBYeyqIVag&usqp=CAU",
        about: [
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (1 meter for up to 30 minutes, IP67)",
          "Single 12MP Wide camera with Portrait mode, Portrait Lighting, Depth Control, Smart HDR, and 4K video up to 60fps",
          "7MP TrueDepth front camera system with Portrait mode, Portrait Lighting",
          "Depth Control, and 1080p video",
          "Face ID for secure authentication",
        ],
      },
      {
        id: "2",
        name: "New Apple Iphone Xr",
        rating: "35656",
        review: "1000",
        emi: "3999",
        delivery: "Wednesday, Aug 18",
        price: "52999",
        status: "In Stock",
        soldby: "Gada Electronics",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBAGf5jpnQr9IAg6_gjo9tSEo8IlXs-76aQ&usqp=CAU",
        about: [
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (1 meter for up to 30 minutes, IP67)",
          "Single 12MP Wide camera with Portrait mode, Portrait Lighting, Depth Control, Smart HDR, and 4K video up to 60fps",
          "7MP TrueDepth front camera system with Portrait mode, Portrait Lighting",
          "Depth Control, and 1080p video",
          "Face ID for secure authentication",
        ],
      },
      {
        id: "3",
        name: "New Apple Iphone 11",
        rating: "35656",
        review: "1000",
        emi: "2999",
        delivery: "Wednesday, Aug 18",
        price: "60999",
        status: "In Stock",
        soldby: "Magan Electronics",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Una2uHjt811jPQGfRPDMuD9kaBYeyqIVag&usqp=CAU",
        about: [
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (1 meter for up to 30 minutes, IP67)",
          "Single 12MP Wide camera with Portrait mode, Portrait Lighting, Depth Control, Smart HDR, and 4K video up to 60fps",
          "7MP TrueDepth front camera system with Portrait mode, Portrait Lighting",
          "Depth Control, and 1080p video",
          "Face ID for secure authentication",
        ],
      },
      {
        id: "4",
        name: "New Apple Iphone 11 Pro",
        rating: "35656",
        review: "1000",
        emi: "4999",
        delivery: "Wednesday, Aug 18",
        price: "66999",
        status: "In Stock",
        soldby: "New Electronics",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBAGf5jpnQr9IAg6_gjo9tSEo8IlXs-76aQ&usqp=CAU",
        about: [
          "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
          "Water and dust resistant (1 meter for up to 30 minutes, IP67)",
          "Single 12MP Wide camera with Portrait mode, Portrait Lighting, Depth Control, Smart HDR, and 4K video up to 60fps",
          "7MP TrueDepth front camera system with Portrait mode, Portrait Lighting",
          "Depth Control, and 1080p video",
          "Face ID for secure authentication",
        ],
      },
    ];
    let item = list.filter((item) => {
      if (item.id == id) return item;
    });
    console.log(id);
    setProductDetails(item[0]);
  }, []);
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <img className="placeorder_image" src={productDetails.image} />
        </Grid>
        <Grid item xs={4}>
          <div className="placeorder_description">
            <div
              style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500 }}
            >
              {productDetails.name}
            </div>
            <div>
              <Rating
                name="read-only"
                value="3"
                readOnly
                style={{ fontSize: "20px" }}
              />
              {productDetails.ratings} ratings |{productDetails.review}+
              answered questions
            </div>
            <hr></hr>
            <div>
              <div className="textgap">
                Price:{" "}
                <span className="pricetag">₹ {productDetails.price}</span>
              </div>
              <div className="textgap">
                Free delivery: <strong>{productDetails.delivery}</strong>
              </div>
              <div className="textgap">
                EMI starts at ₹ {productDetails.emi}. No Cost EMI Available
              </div>
              <div
                style={{ color: "#007600", fontSize: "20px" }}
                className="textgap"
              >
                {productDetails.status}
              </div>
              <div className="textgap">
                Sold by <strong>{productDetails.soldby}</strong> and Fullfilled
                by Amazon.
              </div>
            </div>
          </div>
          <br></br>
          <div style={{ fontSize: "24px" }} className="textgap">
            About this item
          </div>
          <div>
            <ul>
              {productDetails.about != undefined ? (
                productDetails.about.map((item) => <li>{item}</li>)
              ) : (
                <span></span>
              )}
            </ul>
            {/* <ul>
              <li>15 cm (6.1-inch) Super Retina XDR display</li>
              <li>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</li>
              <li>Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording</li>
              <li>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording</li>
              <li>A15 Bionic chip for lightning-fast performance</li>
              </ul> */}
          </div>
        </Grid>
        <Grid item xs={2}>
          <Paper variant="outlined" className="placeorder_order">
            <button className="placeorder_button addtocart" onClick={addToCart}>
              Add to cart
            </button>

            <Link to="/checkout">
              <button className="placeorder_button buynow">Buy Now</button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default PlaceOrder;
