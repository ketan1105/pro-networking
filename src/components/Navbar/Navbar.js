import React from 'react';
import './Navbar.css';
import { link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <div className='navbar_left'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU" />
                <input className='navbar_left_input' placeholder='Search Users' />
                <div className='navbar_elements'>
                    <div className="navbar_right">
                        <p>Hi, Ketan</p>
                        <p onClick={() => navigate("/pro-networking/")}>Home</p>
                        <p onClick={() => navigate("/pro-networking/about-us")}>About us</p>
                        <p onClick={() => navigate("/pro-networking/profile")}>Profile</p>
                        <p>Dark Mode</p>
                        <button>Logout</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;