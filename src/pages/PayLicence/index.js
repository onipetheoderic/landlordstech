import React from 'react';

import HomePage from '../../components/HomePage';
import './PayLicence.css'
import { useHistory } from "react-router-dom";

import FormComponent from './FormComponent/FormComponent'

const PayLicence = (props) => {    

    let history = useHistory();

  function handleClick() {
    history.push("/invoice");
  }

    return (
        <HomePage width='100%' showCurvedFooter={false} showFooter={false} showBackgroundImage={false} backgroundColor="white" height="100%">
            <FormComponent onRegister = {handleClick}/>
        </HomePage>
    )
}

export default PayLicence