import React from 'react'
import "./Checkout.css"

function CheckoutItems(props) {
  return (
    <div>
      <div style={{ border: "1px solid #E7E7E7",width:"95%",display:"flex",height:"250px",margin:"25px"}}>
        <div style={{margin:"25px"}}>
            <img height="200px" src={props.definition.image}/>
        </div>
        <div style={{marginTop:"30px"}}>       
            <div style={{fontSize:"20px",marginBottom:"-9px"}} className='textgap'>{props.definition.name}</div>
            <div style={{fontWeight:"bold",marginBottom:"-9px"}} className='textgap'>{props.definition.price}</div>
            <div style={{marginBottom:"-9px"}} className='textgap'>{props.definition.status}</div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItems
