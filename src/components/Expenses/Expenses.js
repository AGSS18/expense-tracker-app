import { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState("All");
    let filteredYearExpenses;
    
    function filterHandler(year) {
        setSelectedYear(year);
    }
    
    if(selectedYear === "All") {
        filteredYearExpenses = props.expenses;
    } else {
        filteredYearExpenses = props.expenses.filter(expense => {
            return expense.date.getFullYear().toString() === selectedYear
        })
    }

    return(
        <div className="expenses">
            <ExpenseFilter onFilter={filterHandler} selected={selectedYear} />
            <ExpensesList expenses={filteredYearExpenses} />
        </div>
    );
}

export default Expenses;