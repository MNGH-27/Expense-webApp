import React , {useState} from 'react'
import './App.css';
import Expense from './components/Expense/Expense';
import Addexpense from './components/NewExpense/AddExpense';

const Data_list = [
  {
    id : 'e1',
    title : 'Car Insurance',
    amount : 294.96,
    date : new Date(2021 , 3 , 28),
  },
  {
    id : 'e2',
    title : 'New Tv',
    amount : 94.12,
    date : new Date(2020 , 7 , 14),
  },
  {
    id : 'e3',
    title : 'Cheaps',
    amount : 2.50,
    date : new Date(2021 , 4 , 2),
  },
  {
    id : 'e4',
    title : 'potato',
    amount : 10.25,
    date : new Date(2021 , 12 , 19),
  }
]

function App() {
  const [expenses , SetExspenses] = useState(Data_list);

  function OnsaveDataHandler(newDatatoAdd){
    SetExspenses([...expenses , newDatatoAdd ]);
  }

  return (
    <div className="App">
      <Addexpense onSaveExpenseData={OnsaveDataHandler}/>
      <Expense expense={expenses}/>
    </div>
  );
}

export default App;
