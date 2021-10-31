import React from 'react'

import Chartbar from './ChartBar'
import './Chart.css'

function Chart(props){

    return(
        <div className="CoverChart">
            {
                props.dataPoints.map((datapoint)=>(
                    <Chartbar 
                        key={datapoint.label}
                        value={datapoint.value}
                        max = {props.max}
                        label = {datapoint.label}
                    />
                ))
            }
        </div>
    )

}

export default Chart;
