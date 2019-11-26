import React from 'react';
import './Footer.css';
import FooterTitle from './FooterTitle'
import house from './assets/house.jpg';
import house2 from './assets/images.jpg';
import house3 from './assets/index.jpg';

const Footer = (props) => {

    return (
        <section className="footer__container">
            {props.showCurvedFooter &&
            <div className="curvedFooter">

                <div className="curved__container">
                    <img src={house} className="images" />
                    <div className="text__container">
                        <p class="curved__text">Feedback</p>
                        <p class="curved__text">Ministry of Housing</p>
                        <p class="curved__text">(LASRETRAD)- AUG, 2014 </p>
                    </div>
                </div>
                <div className="curved__container">
                    <img src={house} className="images" />
                    <div className="text__container">
                        <p class="curved__text">Feedback</p>
                        <p class="curved__text">Ministry of Housing</p>
                        <p class="curved__text">(LASRETRAD)- AUG, 2014 </p>
                    </div>
                </div>
                <div className="curved__container">
                    <img src={house} className="images" />
                    <div className="text__container">
                        <p class="curved__text">Feedback</p>
                        <p class="curved__text">Ministry of Housing</p>
                        <p class="curved__text">(LASRETRAD)- AUG, 2014 </p>
                    </div>
                </div>
                
            </div>      
        }

        <div className="footer__div">
            <div className="footer__column">
                <FooterTitle footerTitle="LASRETRAD" />
               <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Home</li>
                   <li>About us</li>
               </ul>
            </div> 

            <div className="footer__column">
            <FooterTitle footerTitle="LASRETRAD" />
               <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Home</li>
                   <li>About us</li>
               </ul>
            </div> 

            <div className="footer__column">
            <FooterTitle footerTitle="LASRETRAD" />
               <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Home</li>
                   <li>About us</li>
               </ul>
            </div> 

            <div className="footer__column">
            <FooterTitle footerTitle="LASRETRAD" />
               <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Home</li>
                   <li>About us</li>
               </ul>
            </div> 
 
        </div>
        </section>
    )
}

export default Footer;