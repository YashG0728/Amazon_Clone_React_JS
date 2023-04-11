 import React, { Component } from 'react'
 import "./MainPage.css"
import Advertisementone from './Advertisementone/Advertisementone';
import AdvertisementFour from './Advertisementfour/AdvertisementFour';

  
 class Mainpage extends Component
{
    constructor(props){
        super(props);
            this.state = { }
    }
        render() {
            return (
                <div className='mainpage'>
                     <div style={{paddingTop: "260px", display: "flex", flexWrap: "wrap",marginLeft:"75px"}}>
                         <Advertisementone/>     
                         <AdvertisementFour/> 
                         <Advertisementone/> 
                         <AdvertisementFour/>   
                         <Advertisementone/>     
                         <AdvertisementFour/> 
                         <Advertisementone/> 
                         <AdvertisementFour/>   
                    </div>
                </div>
         );
    }
}
export default Mainpage;