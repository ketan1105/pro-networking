import React from 'react';
import './LeftBox2.css';

function LeftBox2(){

    const tag = [
        {
            id : 1,
            name : "reactjs",
        },
        {
            id : 2,
            name : "programming",
        },
        {
            id : 3,
            name : "softwareengineering",
        },
        {
            id : 4,
            name : "design",
        },
        {
            id : 5,
            name : "developer",
        },
    ]

    return(
        <div className='left_box_2'>
            <p>Recent</p>
            <div className='pp'>
            {tag.map((value) => (<p># {value.name}</p>))}
            
            </div>
        </div>
    );
}

export default LeftBox2;