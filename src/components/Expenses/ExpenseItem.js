import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [deleteExpense, setDeleteExpense] = useState(false);

    function deleteRequestHandler(event) {
        event.preventDefault();
        setDeleteExpense(true);
    }
    
    function deleteConfirmationHandler(event) {
        event.preventDefault();
        props.deleteExpense(props.id);
    }

    function deleteCancelHandler(event) {
        event.preventDefault();
        setDeleteExpense(false);
    }

    return(
        <div className="expense-item__align">
            {deleteExpense ? 
                    <div className="expense-item__actions">
                        <div className="expense-item__actions-cancel">
                            <button onClick={deleteCancelHandler} className="button-cancel" >Cancel</button>
                        </div>
                        <div className="expense-item__actions-add">
                            <button onClick={deleteConfirmationHandler} className="button-delete">Delete Expense</button>
                        </div>
                    </div>
            :
                <div className="expense-item">
                    <ExpenseDate onClick={deleteRequestHandler} date={props.date}/>
                    <div className="expense-item__description">
                        <h2>{props.title}</h2>
                        <div className="expense-item__price">${props.amount}</div>
                    </div>
                </div>
            }
        </div>
    );
}

export default ExpenseItem;