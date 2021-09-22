function NewExpensesDisplay(props) {
    return(
        <div>
            <div className="new-expense__controls">
                <div className="new-expense__control title">
                    <label>Title</label>
                    <input type="text" value={props.info.title} onChange={props.titleChangeHandler} />
                </div>
                <div className="new-expense__control date">
                    <label>Date</label>
                    <input type="date" value={props.inputDate} min="2019-01-01" max="2022-12-31" lang="en-US" onChange={props.dateChangeHandler} />
                </div>
                <div className="new-expense__control amount">
                    <label>Amount</label>
                    <input type="number" value={props.info.amount} min="0.01" step="0.01" onChange={props.amountChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <div className="new-expense__actions-cancel">
                    <button onClick={props.closeAddNew} className="button-cancel" >Cancel</button>
                </div>
                <div className="new-expense__actions-add">
                    <button className="button-add" type="submit" >Add Expense</button>
                </div>
            </div>
        </div>
    );
}

export default NewExpensesDisplay;