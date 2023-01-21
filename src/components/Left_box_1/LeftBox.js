import React from 'react';
import './LeftBox.css';

function LeftBox(){
    return(
        <div className='left_box'>
            <img src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/>
            <p className='email'>guest@gmail.com</p>
            <hr></hr>
            
            <div className='views'>
            <p>Who viewed you</p>
            <p>3,000</p>
            </div>
            <div className='views'>
            <p>Views on post</p>
            <p>2,000</p>
            </div>
            
            
            
        </div>
    );
}

export default LeftBox;