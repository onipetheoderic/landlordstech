import React from 'react';

import HomePage from '../../components/HomePage';
import './HomePageScreen.css'

const HomePageScreen = (props) => {
    
    return (
        <HomePage bgColor='transparent' Width='82%' maxWidth='82%' showCurvedFooter={true} showFooter={true} showBackgroundImage={true}>
            <div className="header__container">
                <h1 className="header__text">Lagos State real estate transaction department</h1>
                <p className="description">The legislation for the establishment of Real Estate Transaction Department was confirmed by an Executive order No. EQ/BRF/009 of 2012 by the erstwhile Governor of Lagos State, Mr Babatunde Raji Fashola (SAN)</p>

           
            </div>           
        </HomePage>
    )
}
export default HomePageScreen