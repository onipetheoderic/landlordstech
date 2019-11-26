import React from 'react';
import './ButtonComponent.css'


const ButtonComponent = (props) => {
    const height = props.height?props.height:40;
    return(
    <button style={{height: height, width: props.width, color: props.color, backgroundColor: props.bgColor, }}>{props.buttonText}</button>
    )
}