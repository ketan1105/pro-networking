import React from 'react';
import LeftBox from '../../components/Left_box_1/LeftBox';
import Midbox from '../../components/Mid_box_1/Midbox';
import LeftBox2 from '../../components/Left_Box_2/LeftBox2';
import Rightbox from '../../components/Right_box/Rightbox';
import './HomePage.css';

function HomePage() {
    return (
        <div className='hP'>
            <div className='left_part'>
                <LeftBox />
                <LeftBox2 />
            </div>
            <div>
            <Midbox />
            </div>
            
            <Rightbox />
            
            
        </div>
    );
}

export default HomePage;