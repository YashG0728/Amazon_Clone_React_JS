import React from 'react'
import "./RightComponent.css"
import Rating from '@mui/material/Rating';
import getSymbolFromCurrency from 'currency-symbol-map'

function Product(props) {
  return (
    <div className='product'>
       <div className='product_image'>
         <img src={props.definition.image} height="280px" />
      </div>
      <div className='product_name'>
        {props.definition.name}
      </div>
      <div className='product_rating'>
       <Rating name="read-only" value="4" readOnly style={{fontSize : "20px"}}/>
        {props.definition.rating}
      </div>
      <div className='product_price'>
        {getSymbolFromCurrency('INR')}{props.definition.price}
      </div>
    </div>
  )
}

export default Product