import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

type ExpenseItemProps = {
  date: Date;
  title: string;
  amount: number;
};

export const ExpenseItem = ({ date, title, amount }: ExpenseItemProps) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">
            <p>
              {"\u20B9"} {amount}
            </p>
          </div>
        </div>
      </Card>
    </li>
  );
};
