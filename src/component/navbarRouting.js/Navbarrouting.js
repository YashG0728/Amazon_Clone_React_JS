import React, { Component } from 'react' //imrc
import "./NavbarRouting.css"


class NavBarRoute extends Component
{
    constructor(props){
        super(props);
            this.state = { }
    }
        render() {
            return (
         <div>
            <div className='navbar_components'></div>
            <div className='navbar_footer'>
                <div className='navbar_footer_text'>Best Seller</div>
                <div className='navbar_footer_text'>Mobile</div>
                <div className='navbar_footer_text'>Amazon Pay</div>
                <div className='navbar_footer_text'>Fashion</div>
                <div className='navbar_footer_text'>Electronics</div>
                <div className='navbar_footer_text'>Prime</div>
                <div className='navbar_footer_text'>Customer Service</div>
                <div className='navbar_footer_text'>Computers</div>
                <div className='navbar_footer_text'>Home & Kitchen</div>
            </div>
         </div>
         );
    }
}
export default NavBarRoute;