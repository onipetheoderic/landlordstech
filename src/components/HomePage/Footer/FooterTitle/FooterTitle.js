import React from 'react';

const FooterTitle = (props) => {
    return (
        <h1 style={{paddingTop: 20, marginLeft: '10%', fontSize:15, fontWeight:'bold', lineHeight:1 }}>{props.footerTitle}</h1>
    )
}

export default FooterTitle;