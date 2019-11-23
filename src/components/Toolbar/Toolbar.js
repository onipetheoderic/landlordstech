import React from 'react'
import './Toolbar.css';//this automatically injects the css code into our running application

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import icon1 from './images.jpg'

//we will get some props and then return some jsx
// we will wrap it with normal parenthesis because we wanna return one statement, which would actually be multiline jsx code
const toolbar = props =>{
console.log("this is the motherfucking props",props.links)
return (
    
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle--button"><DrawerToggleButton click={props.drawerClickHandler} /></div>
            <div className="toolbar__logo"><a href="/">LASRETRAD</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                {props.links.map((eachLink, index, array) =>
                    <li key={eachLink.id}><a href={eachLink.path}>{eachLink.name}</a></li>
                       
                )}    
                </ul>
            </div>
            <div className="user__details">
                
                <img src={icon1} className="user__image"/>
                <ul className="user__detail_list">
                    <li>Ademola Gbadamosi</li>
                    <li className="user__detail_list_small">Landlord</li>
                </ul>
            </div>
        </nav>
    </header>

)
}
export default toolbar;