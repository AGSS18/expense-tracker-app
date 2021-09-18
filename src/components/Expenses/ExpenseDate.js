import './ExpenseDate.css';

function ExpenseDate(props) {
    const dates = {
        month: props.date.toLocaleString('en-US', {month: 'short'}),
        day: props.date.toLocaleString('en-US', {day: '2-digit'}),
        year: props.date.getFullYear()
    }

    return(
        <div className="expense-date">
            <div className="expense-date__month">{dates.month}</div>
            <div className="expense-date__day">{dates.day}</div>
            <div className="expense-date__year">{dates.year}</div>
        </div>
    );
}

export default ExpenseDate;