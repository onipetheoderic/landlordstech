import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';

//since backdrop is another seperate component we import backdrop here
import Backdrop from './BackDrop/Backdrop';
import HeaderText from './HeaderText'
import Footer from './Footer' 
import './HomePage.css';

class HomePage extends React.Component{
 constructor(props){
   super(props)
 }

  render (){
    console.log("list of props", this.props)
    return (
      <div className="homepage__container">
      <Toolbar showBackgroundImage={this.props.showBackgroundImage} backgroundColor={this.props.backgroundColor}/>
      <div style={{position: 'absolute', backgroundColor: this.props.backgroundColor, width: this.props.width,
    position: 'absolute', top: 150, marginLeft: this.props.marginLeft, height: this.props.height}}>
        {this.props.children}
      </div>
      {this.props.showFooter &&
      <Footer showCurvedFooter={this.props.showCurvedFooter}/>
    }
      </div>
    )
  }


}

export default HomePage;
