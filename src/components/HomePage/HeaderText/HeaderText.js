import React from 'react';

const HeaderText = (props) => {
    
    return (
    <div style={{position:'absolute'}}>
        <h1>{props.headerText}</h1>
        <p>{props.description}</p>
    </div>
    )
}

export default HeaderText