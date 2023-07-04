import { ExpensesData } from "../NewExpense/ExpenseForm";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

type ExpensesListProps = {
  expenses: ExpensesData[];
};

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};
