import React from 'react';
import './WhistleBlowing.css';
import HomePage from '../../components/HomePage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from '@fortawesome/free-solid-svg-icons'


// the side drawer will contain the same items with the Toolbar
const WhistleBlowing = props => {

     function handleSubmit(event){
        event.preventDefault();
        console.log(event.target[0].value)
      }
function replicateDash(n){
    return "-".repeat(n)
}

return (
    <HomePage width="100%" showCurvedFooter={false} showFooter={true} showBackgroundImage={false} backgroundColor="white" height="100%">
    <div className="form">
       
        <p className="big__header--text">Whistle Blowing</p>
        <p className="header__text__form">Please Input all the necessary information to help us resolve your complaint as soon as possible</p>
        
        <div className="two-way__registration">
        <p>
        <span className="text-span">1</span><span className="dash__span">{replicateDash(23)}</span><span className="text-span-gray">2</span>
        <p><span className="text-span_under">Your Personal Information</span><span className="dash__span_hidden">{replicateDash(15)}</span><span className="text-span_under_gray">Your Complaint</span></p>

        </p>
        </div>
    <form onSubmit={handleSubmit}>
    <div className="form__c">
        <div className="form__u">
        
        <label>
            <p className="get_form--label">Your Firstname*</p>
            <input type="text" className="form__inputs" />
        </label>
                 
        <label>
            <p className="get_form--label">Your Lastname*</p>
            <input type="text" className="form__inputs" />
        </label>
                    
        </div>
        <div className="left_side">        
        <label>
            <p className="get_form--label">Your Email*</p>
            <input type="text" className="form__inputs"/>
        </label>
             
        <label>
            <p className="get_form--label">Your Phone Number*</p>
            <input type="text" className="form__inputs" />
        </label>
        </div>
       
    </div>
    
    <div className="form__column_buttons">
            <button onClick={props.onRegister} className="form__buttons">Continue</button>
            <p className="terms__condition">By continuing, you agree to the terms and condition and privacy policy of LASERTRAD</p>
    </div>
    </form>
</div>
</HomePage>
)

}
export default WhistleBlowing;
//the sidebar is independent of the toolbar, so we add it alongside app.js