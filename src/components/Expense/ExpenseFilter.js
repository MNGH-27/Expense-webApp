import React from 'react'
import './ExpenseFilter.css'

function Expensefilter(props){
    const onfilterChangeHandler = (event) => {
        props.OnchangeFilter(event.target.value);
    }


    return(
        <div className="container-select">
            <label>Filter bt year</label>
            <select value={props.selected} onChange={onfilterChangeHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}

export default Expensefilter;