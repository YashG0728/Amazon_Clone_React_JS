import React, { useState, useEffect } from 'react';
import "./RightComponent.css";
import Product from './product';
import { Link } from 'react-router-dom';

function RightComponent(props) {

const [listOfProduct,setListOfProducts] = useState([]);

useEffect(()=>{

    let list =[
    
        {id:"1", name : "New Apple Iphone X", rating: "35656", price : "48999", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Una2uHjt811jPQGfRPDMuD9kaBYeyqIVag&usqp=CAU"},
        {id:"2", name : "New Apple Iphone Xr", rating: "35656", price : "52999", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBAGf5jpnQr9IAg6_gjo9tSEo8IlXs-76aQ&usqp=CAU"},
        {id:"3", name : "New Apple Iphone X", rating: "35656", price : "48999", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Una2uHjt811jPQGfRPDMuD9kaBYeyqIVag&usqp=CAU"},
        {id:"4", name : "New Apple Iphone 11 Pro", rating: "35656", price : "66999", image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBAGf5jpnQr9IAg6_gjo9tSEo8IlXs-76aQ&usqp=CAU"},
       


      ] 
    
    setListOfProducts(list);
},[]);

  return (
    <div className='Rightside_main'>
    {/* <Product name="Iphone" rating="356256" price="70,999" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JVLn97pPU9Tkf6dCnaQNGR9w78RxsJoWa3tbzPVhEHp_nyKNFJcmOryGBsR7-6jYYcg&usqp=CAU"/>
    <Product name="Iphone" rating="356256" price="70,999" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6gn9P1mWIg6JuJ72zFVW7oM0lDF_HtYuA0ZtpZBd094vLhAy0do0fLFXlvWnbAtEybw&usqp=CAU"/>
    <Product name="Iphone" rating="356256" price="70,999" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtYaM83S8qC-WCVTSchbfJfFSfwYH2Lfvn2wHg0szdyQ0YDhLoSDcMWxaJDwC3ATP_wM&usqp=CAU"/>
    <Product name="Iphone" rating="356256" price="70,999" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Una2uHjt811jPQGfRPDMuD9kaBYeyqIVag&usqp=CAU"/>
    <Product name="Iphone" rating="356256" price="70,999" image="data:image/jpeg;base64,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"/>
    <Product name="Iphone" rating="356256" price="70,999" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0bDm-rkuQJk7q2adX8xEgrPzUtEN7uw3jA&usqp=CAU"/>
    <Product name="Iphone" rating="356256" price="70,999" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtYaM83S8qC-WCVTSchbfJfFSfwYH2Lfvn2wHg0szdyQ0YDhLoSDcMWxaJDwC3ATP_wM&usqp=CAU"/> */}
   
    {
    listOfProduct.map ( (item) =>(
    /* <Product rating={item.rating} name={item.name} image={item.image} price={item.price} /> */
    <Link to= {'/order/'+item.id} >
    <Product definition={item} />
    </Link>
    )) 
    }
    </div>
  )
}

export default RightComponent
