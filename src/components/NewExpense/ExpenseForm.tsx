import { useState } from "react";
import "./ExpenseForm.css";

export type ExpensesData = {
  id: string;
  title: string;
  date: Date;
  amount: number;
};

type ExpenseFormProps = {
  onSaveNewExpense: (expensesData: ExpensesData) => void;
  onDismissNewExpenseForm: () => void;
};

export const ExpenseForm = ({
  onSaveNewExpense,
  onDismissNewExpenseForm,
}: ExpenseFormProps) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const enteredInputHandler = (identifier: string, value: string) => {
    if (identifier === "title") {
      setExpenseTitle(value);
    } else if (identifier === "amount") {
      setExpenseAmount(value);
    } else {
      setExpenseDate(value);
    }
  };

  const submitFormHandler = (event: any) => {
    event.preventDefault();
    const expensesData = {
      id: Math.random().toString(),
      title: expenseTitle,
      date: new Date(expenseDate),
      amount: +expenseAmount,
    };
    onSaveNewExpense(expensesData);
    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseDate("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseTitle}
            onChange={(event) =>
              enteredInputHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expenseAmount}
            onChange={(event) =>
              enteredInputHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1990-01-01"
            max="2090-12-31"
            value={expenseDate}
            onChange={(event) =>
              enteredInputHandler("date", event.target.value)
            }
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => onDismissNewExpenseForm()}>
          Cancel
        </button>
        <button>Add expense</button>
      </div>
    </form>
  );
};
