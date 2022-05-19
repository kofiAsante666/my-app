import "./expenseItem.css";

function ExpenseItem(_Paras_from_Appjs) {
  const expenseDate = new Date(2022, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <dv>
        <div>
          {_Paras_from_Appjs.date.toLocaleString("en-US", { month: "long" })}
        </div>
        <div></div>
        <div></div>
      </dv>
      <div className="expense-item__description">
        <h2> {_Paras_from_Appjs.title} </h2>
        <div className="expense-item__price"> £{_Paras_from_Appjs.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
