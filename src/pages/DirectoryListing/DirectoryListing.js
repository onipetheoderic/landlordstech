import React from 'react';

import HomePage from '../../components/HomePage';
import './DirectoryListing.css'
import { useHistory } from "react-router-dom";


const DirectoryListing = (props) => {    

    let history = useHistory();

  function handleClick() {
    history.push("/paylicence");
  }

    return (
      <HomePage width="100%" showCurvedFooter={false} showFooter={true} showBackgroundImage={false} backgroundColor="white" height="100%">
          <div className="directory__listing">
            <h1 className="directory__listing__header">Directory Listing</h1>
            <p>This public registerr is a database of all our Licensed Real Estate Agents. Companies and Estate Brokers in Lagos State. Once an Estate Agent is registered by us, we require them to meet the standards set out in our professional code of Ethics and bill of Rules and Regulations. Please click here to see the Rules and Regulatory Code of Conduct that guides and protects the practice of Estate Agents in Lagos State.
            </p>
            <p> This public register can be used to check if someone is licenced by us. find their contact details and also check if they have any complaints upheld against them.</p>
            <p>Our search form can be used to find a person who holds a licence to deal on Real estate in the state</p>
          </div>
          <div className="form__container__directory">
                        <label>
                          
                            <div className="input-container">
                                <input type="text" className="form__inputs--file"/>
                                <button className="directoryButton">Search</button>
                                <button className="directoryButton__filter">F</button>
                            </div>
                            <p className="form__label">Please Enter one of the following criteria to search: Firstname, Lastname or Licence number</p>
                        </label>
                        <table className="directory__table">
                          <tr>
                            <th>Name</th>
                            <th>Office</th>
                            
                            <th>Date Registered</th>
                            <th>Status</th>
                          </tr>
                          {/* <tr>
                            <td>Business Name</td>
                            <td>Individual Business Name </td>
                            <td>1</td>
                            <td>250000 </td>
                            <td>25000</td>
                          </tr> */}
                        
                        </table>
                    </div>
      </HomePage>
    )
}

export default DirectoryListing