import React from 'react'
import Formexpense from './FormExpense';
import './AddExpense.css'

function Addexpense(props){
    function OnsaveDataHandler(newdatatosave){
        const Data={
            id:Math.random().toString(),
            ...newdatatosave,
        }

        props.onSaveExpenseData(Data);
    }

    return(
        <div className="cover-addExpense">
            <Formexpense onSaveExpenseData={OnsaveDataHandler}/>
        </div>
    )
}

export default Addexpense;