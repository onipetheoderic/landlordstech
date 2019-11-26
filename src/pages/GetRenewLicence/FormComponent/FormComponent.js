import React from 'react';
import './FormComponents.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons'


// the side drawer will contain the same items with the Toolbar
const FormComponent = props => {

return (
    <div className="form">
        <p style={{fontWeight:'bold', fontSize:35, textAlign:'center'}}>Get & Renew Licence</p>
        <p style={{textAlign:'center', paddingLeft:200, paddingRight:200}}>Get and renew your license with ease, you must have been registered before you can issue/renew Licence <a>Register with LASERTRAD</a></p>
        
        <div style={{textAlign:'center'}}>
            <button style={{borderRadius:4, color:'white', width: 300, backgroundColor: '#0b3056', padding: '15px 32px', margin:"35px 80px"}}>Get Licence</button>             
            <button style={{borderRadius:4, backgroundColor:'white', outline:'none', borderColor: '#0b3056', width: 300, padding: '15px 32px'}}>Renew Licence</button> 
        </div>

        <div className="form__column">
                    <div className="form__container">
                        <label>
                            <p className="form__label">Email*</p>
                            <input type="text" className="form__inputs"/>
                        </label>
                    </div>
                    <div className="form__container">
                        <label>
                            <p className="form__label">Mobile Number</p>
                            <input type="text" className="form__inputs"/>
                        </label>
                    </div>
            </div>
            <div className="form__column">
                    <div className="form__container">
                        <label>
                            <p className="form__label">Email*</p>
                            <input type="text" className="form__inputs"/>
                        </label>
                    </div>
                    <div className="form__container">
                        <label>
                            <p className="form__label">Mobile Number</p>
                            <input type="text" className="form__inputs"/>
                        </label>
                    </div>
            </div>
            <div className="form__column__large">
                    <div className="form__container_large">
                        <label>
                            <p className="form__label__large">Mobile Number</p>
                            <input type="text" className="form__inputs__large"/>
                        </label>
                    </div>
            </div>
           
    <div className="form__column_button">
            <button onClick={props.onRegister} className="form__button">Register</button>
    </div>
    
</div>
)

}
export default FormComponent;
//the sidebar is independent of the toolbar, so we add it alongside app.js