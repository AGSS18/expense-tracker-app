import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Delete by clicking date',
      amount: 0.00,
      date: new Date(2021, 8, 22),
    },
  ]);

  function addExpenseHandler(expenseData) {
    setExpenses((prevState) => {
      return [...prevState, expenseData];
    });
  }
  
  function deleteExpenseHandler(deleteItemId) {
    setExpenses(prevState => {
      const updateExpenses = prevState.filter(item => item.id !== deleteItemId);
      return updateExpenses;
    });
  };

  return (
    <div className="App container">
      <NewExpense onFormSubmition={addExpenseHandler} />
      <Expenses expenses={expenses} deleteExpense={deleteExpenseHandler} />
      <div className="footer">
        <p> <a href="https://github.com/AGSS18/expense-tracker-react" target="_blank" rel="noreferrer">Open-source code</a> by Ana Sala</p>
      </div>
    </div>
  );
}

export default App;
