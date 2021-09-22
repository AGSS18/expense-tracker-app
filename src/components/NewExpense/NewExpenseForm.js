import { useState } from 'react';
import './NewExpense.css'

function NewExpenseForm(props) {
    const [info, setInfo] = useState({title: "", date: "", amount: ""});
    const [inputDate, setInputDate] = useState("");

    function titleChangeHandler(event) {
        setInfo({...info, title: event.target.value});
    }

    function dateChangeHandler(event) {
        setInputDate(event.target.value);
        setInfo({...info, date: new Date(event.target.value)});

    }

    function amountChangeHandler(event) {
        setInfo({...info, amount: +event.target.value});
        
    }

    function submitHandler(event) {
        event.preventDefault();
        props.onFormSubmit(info);
        setInputDate("");
        setInfo({title: "", date: "", amount: ""})
    }
    
    return(
        <form onSubmit={submitHandler} > 
            <div className="new-expense__controls">
                <div className="new-expense__control title">
                    <label>Title</label>
                    <input type="text" value={info.title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control date">
                    <label>Date</label>
                    <input type="date" value={inputDate} min="2019-01-01" max="2022-12-31" lang="en-US" onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__control amount">
                    <label>Amount</label>
                    <input type="number" value={info.amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <div className="new-expense__actions-cancel">
                    <button type="button" onClick={props.closeAddNew} className="button-cancel" >Cancel</button>
                </div>
                <div className="new-expense__actions-add">
                    <button className="button-add" type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default NewExpenseForm;