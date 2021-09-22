import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function ExpensesList(props) {
    let expensesContent = <p className="message" >No expenses found 🙃</p>;

    if(props.expenses.length > 0) {
        expensesContent = props.expenses.reverse().map((expense) => (
                    <ExpenseItem 
                    key={expense.id} 
                    id={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                    />            
            ));
    }

    return (
        expensesContent
    );
}

export default ExpensesList;