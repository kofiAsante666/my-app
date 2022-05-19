import "./expenseItem.css";
import ExpenseDtae from "./ExpenseDate";

function ExpenseItem(_Paras_from_Appjs) {
  return (
    <div className="expense-item">
      <ExpenseDtae date={_Paras_from_Appjs.date}></ExpenseDtae>
      <div className="expense-item__description">
        <h2> {_Paras_from_Appjs.title} </h2>
        <div className="expense-item__price"> £{_Paras_from_Appjs.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
