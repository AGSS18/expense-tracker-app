import './ExpenseItem.css';

function ExpenseItem() {
    return(
    <div className="expense-item">
        <div className="expense-item__date">March 14 2021</div>
        <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">$200.95</div>
        </div>
    </div>
    );
}

export default ExpenseItem;