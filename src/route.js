import React,{Component} from 'react';

import GetRenewLicence from '../src/pages/GetRenewLicence/GetRenewLicence';
import HomePage from '../src/pages/HomePageScreen';
import InvoicePage from '../src/pages/InvoicePage';
import PayLicencePage from '../src/pages/PayLicence';
import PaymentSuccessfulScreen from '../src/pages/PaymentSuccessfulScreen';
import DirectoryListing from '../src/pages/DirectoryListing/DirectoryListing'

import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export const Routing = (
  <Router>    
    <Route exact path="/" component={HomePage} />
    <Route exact path="/licence" component={GetRenewLicence} />
    <Route exact path="/invoice" component={InvoicePage} />
    <Route exact path="/paylicence" component={PayLicencePage} />
    <Route exact path="/successfulpayment" component={PaymentSuccessfulScreen} />
    <Route exact path="/directory" component={DirectoryListing} />
  </Router>
)