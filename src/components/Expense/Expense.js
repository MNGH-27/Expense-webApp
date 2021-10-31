import React,{useState} from 'react'
import Expenseitem from './Expenseitem'
import Expensefilter from './ExpenseFilter'
import ExpenseChart from './ExpenseChart'

import './Expense.css'
function Expense(props){
    const [Filteryear,SetFilteryear] = useState('2022'); 

    const FilterChangeHandler = (Selectedyear) => {
        SetFilteryear(Selectedyear);
    }

    const expense = props.expense.filter((expen)=>{
        return expen.date.getFullYear().toString() === Filteryear;
    })

    var resualt_Show = <p className="Show_res">Can't Find any thing</p>;
    if(expense.length > 0 ){
        resualt_Show = expense.map((expe)=>(
            <Expenseitem 
                key={expe.id}
                title={expe.title}
                date={expe.date}
                amount={expe.amount}
            />
        ));
    }



    return( 
        <div className="container">
            <Expensefilter OnchangeFilter={FilterChangeHandler} selected={Filteryear}/>
            <ExpenseChart expense={resualt_Show} />
            {resualt_Show}
        </div>
    )
}

export default Expense;