// import './App.css';
import React, {useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense';

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'House Rent',
    amount: '5000',
    date: new Date(2022, 11, 24)
  },
  {
    id: 'e2',
    title: 'Fooding',
    amount: '2000',
    date: new Date(2022, 7, 20)
  },
  {
    id: 'e3',
    title: 'Stationary',
    amount: '1000',
    date: new Date(2022, 5, 24)
  },
  {
    id: 'e4',
    title: 'Clothes',
    amount: '1000',
    date: new Date(2022, 3, 9)
  }
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    console.log("App",expense);
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  }

  return ( 
    <div>
      {/* <ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmount}/> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
