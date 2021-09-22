import { useState } from 'react';

import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {
    const [addNew, setAddNew] = useState(false);

    function onFormSubmit(data) {
        const expenseData = {
            ...data, 
            id: Math.random().toString()
        };
        props.onFormSubmition(expenseData);
        setAddNew(false);
    }

    function handleClick(event) {
        event.preventDefault();
        setAddNew(true);
    }

    function closeAddNew(event) {
        event.preventDefault()
        setAddNew(false);
    }

    return (
        <div className="new-expense">
            {addNew ? 
                <NewExpenseForm onFormSubmit={onFormSubmit} closeAddNew={closeAddNew} />
            :
                <div>
                    <button onClick={handleClick} className="add-new-button">+</button>
                    <p className="add-new-text">Add new expense</p>
                </div>  
            }
        </div>
    );
}

export default NewExpense;