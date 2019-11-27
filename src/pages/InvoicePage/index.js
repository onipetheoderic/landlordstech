import React, {useState, Component} from 'react';
import './InvoicePage.css';
import HomePage from '../../components/HomePage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png'
import lagoslogo from './lagoslogo.jpg'
import { withRouter, useHistory } from "react-router-dom";



// the side drawer will contain the same items with the Toolbar
const InvoicePage = props => {
    let history = useHistory();

  function goToPayLicence() {
    history.push("/");
  }
let defaultData = {
  "invoice_number":"4034057579",
  "transaction_date":"26-Nov-19",
  "customer_id":"128279",
  "payer_id":"C-38777",
  "customer_name":"Property Link Real Estate Investment Limited.",
  "customer_address":"Plot 1, Block 77 Alh. Basheer Shittu Ave, Magodo GRA Phase 2, lagos State.",
  "amount_due":"250000.00",
  "amount_paid":"0.00",
  "currency_code":"NGN",
  "number_of_items":"1",
  "payment_status":"UNPAID",
  "push_status":"NEW",
  "reference":"11472",
  "client_code":"PISON ",
  "mda_code":"097",
  "mda_description":"LASRETRAD",
  "invoice_lines": [
    {
      "item_name":"Real Estate Agent Annual Registration Fee",
      "unit_price":"250000",
      "quantity":"1",
      "amount":"250000",
      "description":"Real Estste Registration Fee",
      "revenue_code":"01-097-97004-000-11009-0000-32339",
      "revenue_description":"Consolidated Revenue Fund-Office of the Surveyor General-Account-Unspecified-Alausa-Unspecified-Survey Plan"
      
    }
    ]
}
  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      //   'Authorization': 'Bearer 44d2ab667330b30a1467d9b07b94092b4967dae2d3e47da1997c75714b74d996'

      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }


async function sendInvoiceDetails () {
  try {
    const data = await postData('https://paygatetest.softalliance.com/index.php/full_invoice', defaultData);
    console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
    alert("Invoice Sent Successfully")
    history.push('/successfulpayment')
  } catch (error) {
    console.error(error);
    alert("Error in Transaction")
  }
}


return (
    <HomePage showCurvedFooter={false} showFooter={false} showBackgroundImage={false} backgroundColor="white" height="900px">

        <div id="wrapper">
            <div id="left">
                <img src={lagoslogo} height={100} width={100}/>        
                <p style={{fontWeight:'bold', marginLeft:10}}>Landslordtech Company</p>
                <p style={{marginLeft:10, width: 130}}>Landslordtech Company, Landslordtech Company Landslordtech Company</p>
                
            </div>
            <div class="right">            
                <div><h1 style={{fontSize:25, lineHeight:0, paddingTop:35, textAlign:'left', paddingBottom:0}}>Invoice: Unpaid  </h1>
                <p style={{paddingBottom:20}}>Individual Business Name</p>
                <p style={{fontWeight:'bold', marginRight:10}}>Invoice #:<span style={{paddingLeft:10}}> 06737</span> </p>
                <p style={{fontWeight:'bold', marginRight:10}}>Invoice Date:<span style={{paddingLeft:10}}> 12/14/2012</span> </p>
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
    <td>Business Name</td>
    <td>Individual Business Name </td>
    <td>1</td>
    <td>250000 </td>
    <td>25000</td>
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
<button className="BUTTON_FYD_TRANSPARENT" onClick={goToPayLicence}>Download Invoice</button>
<button className="BUTTON_FYD" onClick={sendInvoiceDetails}>Pay Invoice Now</button>

</div>
    </div>
</div>
   
    </HomePage>
)

}
export default withRouter(InvoicePage);
//the sidebar is independent of the toolbar, so we add it alongside app.js