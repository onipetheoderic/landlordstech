import React from 'react';
import './DashboardComponent.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons'

import icon1 from './assets/house.png'

// the side drawer will contain the same items with the Toolbar
const DashboardComponent = props => {

return (
    <div className="card_view">
        <center><h4 className="header">Welcome to our dashboard Ademola Gbadamosi!</h4></center>
        <div class="card">
            <div><h4 className="card__upper--text">Register Tenency</h4></div>
            <div class="container">                
            <img src={icon1} className="card__image"/>
            </div>     
            <div><h4 className="card__upper--text">Register Tenency of a Property</h4></div>
            <div class="card__bottom">
                <h5 className="card__bottom--text">Register</h5>
            </div>       
        </div> 

        <div class="card">
            <div><h4 className="card__upper--text">Register Tenency</h4></div>
            <div class="container">                
            <img src={icon1} className="card__image"/>
            </div>     
            <div><h4 className="card__upper--text">Register Tenency of a Property</h4></div>
            <div class="card__bottom">
                <h5 className="card__bottom--text">Register</h5>
            </div>       
        </div> 

        <div class="card">
            <div><h4 className="card__upper--text">Register Tenency</h4></div>
            <div class="container">                
            <img src={icon1} className="card__image"/>
            </div>     
            <div><h4 className="card__upper--text">Register Tenency of a Property</h4></div>
            <div class="card__bottom">
                <h5 className="card__bottom--text">Register</h5>
            </div>       
        </div> 
    </div>
)

}
export default DashboardComponent;
//the sidebar is independent of the toolbar, so we add it alongside app.js