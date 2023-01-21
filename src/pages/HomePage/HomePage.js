import React from 'react';
import LeftBox from '../../components/Left_box_1/LeftBox';
import Feed from '../../components/Feed/Feed';
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
            <Feed />
            </div>
            
            <Rightbox />
            
            
        </div>
    );
}

export default HomePage;