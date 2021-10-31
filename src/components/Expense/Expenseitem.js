import React , { useState } from 'react'

import Expensedate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
    const[title ,setTitle] = useState(props.title);

    return (
        <div className="expense-item">
            <ul>
                <li className="expense-item-date"> <Expensedate date ={props.date}/> </li>
                <li className="expense-item-Insurance">{title}</li>
                <li className="expense-item-price">${props.amount}</li>
            </ul>
        </div>
    )
}

export default ExpenseItem;