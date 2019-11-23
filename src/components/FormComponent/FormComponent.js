import React from 'react';
import './FormComponent.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons'


// the side drawer will contain the same items with the Toolbar
const FormComponent = props => {

return (
    <div className="form">
        <h5>Get/Renew Licence</h5>
        <div className="form__column">          
                <div className="form__container">
                    <label>
                        <p className="label__text">Firstname*</p>
                        <input type="text" className="form__inputs"/>
                    </label>
                </div>
                <div className="spacer" />
                <div className="form__container">
                    <label>
                        <p>Lastname*</p>
                        <input type="text" className="form__inputs"/>
                    </label>
                </div>
                <div className="spacer" />
                <div className="form__container">
                    <label>
                        <p>Gender*</p>
                            <select className="form__inputs--select">
                                <option value="Male" selected value="Male">Male</option>
                                <option value="Female">Female</option>
                
                            </select> 
                    </label>
                </div>
            </div>
            
            <div className="form__column">
                    <div className="form__container">
                        <label>
                            <p>Email*</p>
                            <input type="text" className="form__inputs"/>
                        </label>
                    </div>
                    <div className="form__container">
                        <label>
                            <p>Mobile Number</p>
                            <input type="text" className="form__inputs"/>
                        </label>
                    </div>
                                       
                    <div className="spacer" />
                    <div className="form__container">
                        <label>
                            <p>Business Registration Number</p>
                            <input type="text" className="form__inputs"/>
                        </label>
                    </div>
            </div>

            <div className="form__column">
                    <div className="form__container">
                        <label>
                            <p>Business</p>
                            <input type="text" className="form__inputs"/>
                        </label>
                    </div>
                    <div className="spacer" />
                    <div className="form__container_large">
                        <label>
                            <p>Company Address</p>
                            <input type="text" className="form__inputs--large"/>
                        </label>
                    </div>
                    <div className="spacer" />
                   
            </div>
            <div className="form__column">
                    <div className="form__container">
                        <label>
                            <p>Upload Certificate of Incorporation</p>
                            <div className="input-container">
                                <input type="file" className="form__inputs--file"/>
                                <FontAwesomeIcon 
                                className='form__icon'
                                icon={faUpload} />
                            </div>
                        </label>
                    </div>
                    <div className="spacer" />
                    <div className="form__container">
                        <label>
                            <p>Mode of Identification</p>
                            <input type="text" className="form__inputs"/>
                        </label>
                    </div>
                    <div className="spacer" />
                    <div className="form__container">
                        <label>
                            <p>Upload Identification Document</p>
                            <div className="input-container">
                                <input type="file" className="form__inputs--file"/>
                                <FontAwesomeIcon 
                                className='form__icon'
                                icon={faUpload} />
                            </div>
                        </label>
                    </div>
            </div>
            <div className="form__column">                                   
                    <div className="form__container">
                        <label>
                            <p>Upload Photo of Yourself</p>
                            <div className="input-container">
                                <input type="file" className="form__inputs--file"/>
                                <FontAwesomeIcon 
                                className='form__icon'
                                icon={faUpload} />
                            </div>
                        </label>
                    </div>
                    <div className="form__container">
                        <label>
                            <p>Password</p>
                            <input type="password" className="form__inputs"/>
                        </label>
                    </div>
                    <div className="spacer" />
                    <div className="form__container">
                        <label>
                            <p>Confirm Password</p>
                            <input type="password" className="form__inputs"/>
                        </label>
                    </div>
                    
            </div>
            <div className="form__column_button">
                 <button className="form__button">Register</button>
            </div>
           
</div>
)

}
export default FormComponent;
//the sidebar is independent of the toolbar, so we add it alongside app.js