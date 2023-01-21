import React from 'react';
import Elements from './Elements';
import './Navbar.css';


function Navbar(){
    return(
        <div className='navbar'>
            <div className='navbar_left'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU"/>
                <input className='navbar_left_input' placeholder='Search Users' />
                 <div className='navbar_elements'>
                <Elements 
                text = "HI,ALPHA USER"/>
                <Elements 
                 text = "HOME"/>
                <Elements 
                text = "ABOUT US"/>
                <Elements 
                 text = "PROFILE"/>
                <Elements 
                 text = "DARK MODE"/> 
                 <button>LOGOUT</button>
                 </div>
            </div>
        </div>
    );
}

export default Navbar;