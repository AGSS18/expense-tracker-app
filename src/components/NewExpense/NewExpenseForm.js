import { useState } from 'react';
import './NewExpense.css'
import NewExpensesDisplay from './NewExpensesDisplay';

function NewExpenseForm(props) {
    const [info, setInfo] = useState({title: "", date: "", amount: ""});
    const [inputDate, setInputDate] = useState("");
    const [newExpense, setNewExpense] = useState(false);

    function titleChangeHandler(event) {
        setInfo({...info, title: event.target.value});
    }

    function dateChangeHandler(event) {
        setInputDate(event.target.value);
        setInfo({...info, date: new Date(event.target.value)});

    }

    function amountChangeHandler(event) {
        setInfo({...info, amount: event.target.value});
        
    }

    function submitHandler(event) {
        event.preventDefault();
        setInputDate("");
        setInfo({title: "", date: "", amount: ""})
        props.onFormSubmit(info);
    }

    function clickHandler(event) {
        event.preventDefault();
        setNewExpense(true);
    }

    function closeAddNew(event) {
        event.preventDefault();
        setNewExpense(false);
    }

    return(
        <form onSubmit={submitHandler} > 
            {newExpense ? 
                <NewExpensesDisplay titleChangeHandler={titleChangeHandler} dateChangeHandler={dateChangeHandler} amountChangeHandler={amountChangeHandler} info={info} inputDate={inputDate} closeAddNew={closeAddNew} />
            : 
            <div>
                <button onClick={clickHandler} className="add-new-button">+</button>
                <p className="add-new-text" >Add new expense</p>
            </div>
            }
        </form>
    );
}

export default NewExpenseForm;