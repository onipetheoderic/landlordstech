import React from 'react';

import HomePage from '../../components/HomePage';
import './GetRenewLicence.css'
import { useHistory } from "react-router-dom";
import FormComponent from './FormComponent/FormComponent'

const GetRenewLicence = (props) => {    

    let history = useHistory();

  function handleClick() {
    history.push("/paylicence");
  }

    return (
        <HomePage width="100%" showCurvedFooter={false} showFooter={true} showBackgroundImage={false} backgroundColor="white" height="100%">
            <FormComponent onRegister = {handleClick}/>
        </HomePage>
    )
}

export default GetRenewLicence