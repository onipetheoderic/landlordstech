import React from 'react';
import HomePage from '../../components/HomePage';
import './InformationAndDataAnalysis.css'

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{name: 'Jan', uv: 400, pv: 2400, amt: 2400},
                {name: 'Feb', uv: 400, pv: 2400, amt: 2400},
                {name: 'Mar', uv: 400, pv: 2400, amt: 2400},
                {name: 'Apr', uv: 400, pv: 2400, amt: 2400},
                {name: 'May', uv: 400, pv: 2400, amt: 2400},
                {name: 'Jun', uv: 400, pv: 2400, amt: 2400},
                {name: 'Jul', uv: 400, pv: 2400, amt: 2400},
                {name: 'Aug', uv: 400, pv: 2400, amt: 2400},
                {name: 'Sep', uv: 400, pv: 2400, amt: 2400},
                {name: 'Oct', uv: 400, pv: 2400, amt: 2400},
                {name: 'Nov', uv: 400, pv: 2400, amt: 2400},
                {name: 'Dec', uv: 400, pv: 2400, amt: 2400},
            ];


const InformationAndDataAnalysis = (props) => {    

    return (
      <HomePage paddingTop='30px' width="100%" showCurvedFooter={false} showFooter={true} showBackgroundImage={false} backgroundColor="white" height="100%">
        <div className="info__listing">
            
        </div>
          
      </HomePage>
    )
}

export default InformationAndDataAnalysis