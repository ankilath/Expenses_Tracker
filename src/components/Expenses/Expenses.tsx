import { useState } from "react";
import { Card } from "../UI/Card";
import "./Expenses.css";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

type ExpensesProps = {
  id: string;
  title: string;
  amount: number;
  date: Date;
}[];

export const Expenses = (props: { items: ExpensesProps }) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilteringYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};
