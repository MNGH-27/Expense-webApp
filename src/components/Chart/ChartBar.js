import React from 'react'

import './ChartBar.css'

function Chartbar(props){
    let BarFillHeight = '0%';
        
    if(props.value>0){
        const percenttoget = Math.round((props.value / props.max) * 100 )
        BarFillHeight = percenttoget + '%';
        if(percenttoget<3){
            BarFillHeight = 3 + '%';
        }
    }

    console.log("props.value : "+props.value);
    console.log("This is BarFill :  "+BarFillHeight);
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:BarFillHeight}}></div>
            </div>
            <div className="chart-bar__label ">{props.label}</div>
        </div>
    )

}

export default Chartbar;