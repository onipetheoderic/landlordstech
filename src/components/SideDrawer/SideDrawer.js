import React from 'react';
import './SideDrawer.css';
import icon1 from './images.jpg'

// the side drawer will contain the same items with the Toolbar
const SideDrawer = props => {
//since we would want to do some calculations
let drawerClass = 'side-drawer';
if(props.show){
    drawerClass='side-drawer open'
}
return (
    <nav className={drawerClass}>
    
        <ul>  
        <div class="user__image__sidebar_container">  <img src={icon1} className="user__image__sidebar"/></div>
        {props.links.map((eachLink, index, array) =>
                    <li key={eachLink.id}><a href={eachLink.path}>{eachLink.name}</a></li>
                       
        )}    
        </ul>
    </nav>
)

}
export default SideDrawer;
//the sidebar is independent of the toolbar, so we add it alongside app.js