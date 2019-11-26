import React from 'react';
import './InvoicePage.css';
import HomePage from '../../components/HomePage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png'
import { useHistory } from "react-router-dom";


// the side drawer will contain the same items with the Toolbar
const InvoicePage = props => {
    let history = useHistory();

  function goToPayLicence() {
    history.push("/paylicence");
  }

return (
    <HomePage showCurvedFooter={false} showFooter={false} showBackgroundImage={false} backgroundColor="white" height="900px">

        <div id="wrapper">
            <div id="left">
                <img src={logo} height={100} width={100}/>        
                <p style={{fontWeight:'bold', marginLeft:10}}>Landslordtech Company</p>
                <p style={{marginLeft:10, width: 130}}>Landslordtech Company, Landslordtech Company Landslordtech Company</p>
                
            </div>
            <div class="right">            
                <div><h1 style={{paddingTop:35, textAlign:'center', paddingBottom:60}}>Invoice</h1>
                
                <p style={{fontWeight:'bold', marginRight:10}}>Invoice #:<span style={{paddingLeft:100}}> 06737</span> </p>
                <p style={{fontWeight:'bold', marginRight:10}}>Invoice Date #:<span style={{paddingLeft:60}}> 12/14/2012</span> </p>
                <p style={{marginRight:10, fontStyle:'italic', marginTop: 50}}>Attention: Onipe Theoderic</p>
                <p style={{marginRight:10}}>123, street bodija ibadan</p>
                <p style={{marginRight:10}}>customer_email@gmail.com</p>
                </div>
            </div>
            <div className="break"/>
               
<table>
  <tr>
    <th>Item</th>
    <th>Description</th>
    <th>Qty</th>
    <th>Price</th>
    <th>Amount</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders </td>
    <td>Germany</td>
    <td>Maria Anders </td>
    <td>Germany</td>
  </tr>
 
</table>
<div className="left">
<img src={logo} height={100} width={100} style={{visibility:"hidden"}}/>        
       <p style={{fontStyle:'italic', fontWeight:'bold', paddingLeft:10, color: "green"}}>Thank you for your business and have a great day!</p>        
</div>
<div className="right">        
                
<table style={{width:'95%'}}>
  <tr style={{display:'none'}}>
    <th>Subtotal</th>
    <th>Description</th>
    
  </tr>
  <tr>
    <td className="down__table">Subtotal</td>   
    <td className="down__table">$60.00</td>
  </tr>

  <tr>
    <td className="down__table">Total Due</td>   
    <td className="down__table">$60.00</td>
  </tr>
  <tr>
    <td className="down__table">Due Date</td>   
    <td className="down__table">2/12/2020</td>
  </tr>

</table>
<div style={{marginTop:20, marginRight: 10}}>
<button className="BUTTON_FYD" onClick={goToPayLicence}>Pay Invoice Now</button>
</div>
    </div>
</div>
   
    </HomePage>
)

}
export default InvoicePage;
//the sidebar is independent of the toolbar, so we add it alongside app.js