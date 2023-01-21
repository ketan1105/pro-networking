import React from 'react';
import './Elements.css';


function Elements(props){
    return(
        <div className='navbar_right'>
            <button>{props.text}</button>
        </div>
    );
}

export default Elements;