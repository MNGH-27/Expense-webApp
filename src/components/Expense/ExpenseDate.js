import React from 'react'
import './ExpenseDate.css'

function Expensedate(props){
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();

    return(
        <div>
            <p className="year">{year}</p>
            <p className="month">{month}</p>
            <p className="day">{day}</p>
        </div>
    )
}

export default Expensedate;