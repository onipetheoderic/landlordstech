import React from 'react'
import './Toolbar.css';//this automatically injects the css code into our running application

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import house from './house.png'
import lagoslogo from './lagoslogo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch} from '@fortawesome/free-solid-svg-icons'
import tower from './tower.jpg'
import { NavLink, Route, Link, BrowserRouter as Router } from 'react-router-dom';

//we will get some props and then return some jsx
// we will wrap it with normal parenthesis because we wanna return one statement, which would actually be multiline jsx code
const toolbar = props =>{

  const showBackgroundImage = props.showBackgroundImage
  const imageName = showBackgroundImage? tower:false
return (
  <div style={{backgroundImage: `url(${imageName})`,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: '100%'}}>
  <>
        <div className="homepage__navs_container">
          <ul className="home_links">
            <li className="logo__item"><img src={lagoslogo} className="homepage__image__logo"/></li>
            <li className="logo__item--download"><button className="button--search"><FontAwesomeIcon className="homepage__icon--download" icon={faBars}/>Download Tenency Form</button></li>
            <li className="logo__item--download"><button className="button1"><FontAwesomeIcon className="homepage__icon--download--search" icon={faSearch}/></button></li>
            <li className="logo__item--header"> <NavLink to="/" activeStyle={{ fontWeight: 'bold' }} style={{ cursor:'pointer', textDecoration: 'none', color:'white' }}><button>LASRETRAD</button></NavLink></li>
            <li className="logo__item--signup"><button>Sign Up</button></li>
            <li className="logo__item--login"><button>Log In</button></li>
            <li className="home__item"><img src={house} className="homepage__image__logo"/></li>
          </ul>
        </div>
        <div className="divider">
            <ul>
                <li>Directory</li>
                <li><NavLink to="/licence" activeStyle={{ fontWeight: 'bold' }} style={{ cursor:'pointer', textDecoration: 'none', color:'white' }}>Get & Renew Licence</NavLink></li>
                <li>Registration</li>
                <li>Complaint & Petition</li>
                <li>Information & Data Analysis</li>
                <li>Whistle Blowing</li>
                <li>Education</li>
                <li>Rules & Regulation</li>
                <li>News & Events</li>
            </ul>
        </div>
        </>
  </div>

)
}
export default toolbar;