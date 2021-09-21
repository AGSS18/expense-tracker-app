import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {

    function onFormSubmit(data) {
        const expenseData = {
            ...data, 
            id: Math.random().toString()
        };
        props.onFormSubmition(expenseData)
    }

    return (
        <div className="new-expense">
            <NewExpenseForm onFormSubmit={onFormSubmit} />
        </div>
    );
}

export default NewExpense;