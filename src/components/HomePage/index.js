import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import FooterTitle from './Footer/FooterTitle/FooterTitle'
//since backdrop is another seperate component we import backdrop here
import Backdrop from './BackDrop/Backdrop';
import HeaderText from './HeaderText'
import Footer from './Footer' 
import './HomePage.css';
import Background from './assets/tower.jpg'

class HomePage extends React.Component{
 constructor(props){
   super(props)
 }

  render (){
    console.log("list of props", this.props)
    let maxWidth = this.props.width!==" "?this.props.maxWidth:'100%';
    let Width = this.props.width?this.props.width:'100%';
    let bgColor = this.props.bgColor? this.props.bgColor: 'white'
    let paddingTop = this.props.paddingTop ? this.props.paddingTop: '104px'
    let MyImageBackground = this.props.showBackgroundImage ? Background: ""
    return (
      <>
      <div style={{backgroundColor:'#012b3f', width:'100%', backgroundImage: `url(${MyImageBackground})`}}>
          <Toolbar showBackgroundImage={this.props.showBackgroundImage} backgroundColor={this.props.backgroundColor}/>
        <div style={{margin: '133px auto',
    paddingTop: paddingTop,
    paddingBottom: '30px',
    maxWidth: maxWidth,
    background: bgColor,
    width: Width}}>
        {this.props.children}
        </div>
      </div>

{/*       
      
      <Toolbar showBackgroundImage={this.props.showBackgroundImage} backgroundColor={this.props.backgroundColor}/>
      <div style={{position: 'absolute', backgroundColor: this.props.backgroundColor, width: this.props.width,
    position: 'absolute', top: 150, marginLeft: this.props.marginLeft, height: this.props.height}}>
        {this.props.children}
      </div> */}

      
    
    {this.props.showFooter &&
  
    <div className="footer">
      <div className="footer__alone_container">
            <div className="footer__column">
                <FooterTitle footerTitle="LASRETRAD" />
               <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Home</li>
                   <li>About us</li>
               </ul>
            </div> 

            <div className="footer__column">
            <FooterTitle footerTitle="LASRETRAD" />
               <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Home</li>
                   <li>About us</li>
               </ul>
            </div> 

            <div className="footer__column">
            <FooterTitle footerTitle="LASRETRAD" />
               <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Home</li>
                   <li>About us</li>
               </ul>
            </div> 

            <div className="footer__column">
            <FooterTitle footerTitle="LASRETRAD" />
               <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Home</li>
                   <li>About us</li>
               </ul>
            </div> 
    </div> 
    </div>
  }
     
      </>
    )
  }


}

export default HomePage;
