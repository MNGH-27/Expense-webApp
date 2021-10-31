import Reat from 'react'

import Chart from '../Chart/Chart'

const ExpenseChart = (props) => {
    let totalamount =0;
    const chartdata = [
        {label:'Jan' , value: 0},
        {label:'Feb' , value: 0},
        {label:'Mar' , value: 0},
        {label:'Apr' , value: 0},
        {label:'May' , value: 0},
        {label:'Jun' , value: 0},
        {label:'Jul' , value: 0},
        {label:'Aug' , value: 0},
        {label:'Sep' , value: 0},
        {label:'Oct' , value: 0},
        {label:'Nov' , value: 0},
        {label:'Dec' , value: 0},
    ];

    for(const expenses of props.expense){
        const expensemonth = expenses.props.date.getMonth();
        totalamount += expenses.props.amount;
        chartdata[expensemonth].value += expenses.props.amount;
    }

    return <Chart dataPoints={chartdata} max={totalamount} />

}

export default ExpenseChart;