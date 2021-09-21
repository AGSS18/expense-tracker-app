import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450.55,
      date: new Date(2021, 5, 12),
    },
  ]);

  function addExpenseHandler(expenseData) {
    setExpenses([...expenses, expenseData])
  }
  
  console.log(expenses);

  return (
    <div className="App container">
      <NewExpense onFormSubmition={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
