import { useState } from "react";
import { ExpenseForm, ExpensesData } from "./ExpenseForm";
import "./NewExpense.css";

type NewExpenseProps = {
  onAddNewExpense: (expenseData: ExpensesData) => void;
};

export const NewExpense = ({ onAddNewExpense }: NewExpenseProps) => {
  const [showExpenseAddForm, setShowExpenseAddForm] = useState(false);
  const newExpenseFormHandler = () =>
    setShowExpenseAddForm((prevFlag) => !prevFlag);

  const saveNewExpenseHandler = (expenseData: ExpensesData) => {
    newExpenseFormHandler();
    onAddNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {showExpenseAddForm ? (
        <ExpenseForm
          onSaveNewExpense={saveNewExpenseHandler}
          onDismissNewExpenseForm={newExpenseFormHandler}
        />
      ) : (
        <button onClick={newExpenseFormHandler}>Add new expense</button>
      )}
    </div>
  );
};
