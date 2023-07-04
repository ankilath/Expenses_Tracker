import "./ExpensesFilter.css";

type ExpensesFilterProps = {
  selected: string;
  onFilteringYear: (selectedYear: string) => void;
};

export const ExpensesFilter = ({
  onFilteringYear,
  selected,
}: ExpensesFilterProps) => {
  const changeYearHandler = (event: any) => {
    onFilteringYear(event.target.value);
  };

  const arrayOfYears = () => {
    let currentYear = new Date().getFullYear();
    let counter = 4;
    const years = [currentYear];
    while (counter > 0) {
      currentYear = currentYear - 1;
      years.push(currentYear);
      counter = counter - 1;
    }
    return years;
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeYearHandler} value={selected}>
          {arrayOfYears().map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
