import React from 'react';

import HomePage from '../../components/HomePage';
import './Education.css'
import { useHistory } from "react-router-dom";
import tower from './assets/tower.jpg'

const Education = (props) => {    
    let history = useHistory();

  function handleClick() {
    history.push("/paylicence");
  }

    return (
      <HomePage paddingTop='30px' width="100%" showCurvedFooter={false} showFooter={true} showBackgroundImage={false} backgroundColor="white" height="100%">
        <div className="new__listing">
            <h1 className="news__listing__header">Education</h1>  
                  
            <div className="newscard">
              <img src={tower} className="news_image" />
              <p className="news__header">Compliance with educational Requirements by Estate Agents who are registered with Lasertrad</p>
            <p className="news__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
            </div>
            <div className="newscard">
              <img src={tower} className="news_image" />
              <p className="news__header">Compliance with educational Requirements by Estate Agents who are registered with Lasertrad</p>
            <p className="news__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
            </div>  
            <div className="newscard">
              <img src={tower} className="news_image" />
              <p className="news__header">Compliance with educational Requirements by Estate Agents who are registered with Lasertrad</p>
            <p className="news__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing</p>
            </div>
  

        </div>
          
      </HomePage>
    )
}

export default Education