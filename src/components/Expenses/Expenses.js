import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {

    function filterHandler(year) {
        console.log(year);
    }
    
    return(
        <div className="expenses">
            <ExpenseFilter onFilter={filterHandler} />
            {props.expenses.map(function(expense){
                return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            })}
        </div>
    );
}

export default Expenses;