import "./Chart.css";
import { ChartBar } from "./ChartBar";

type ChartProps = {
  dataPoints: {
    value: number;
    label: string;
  }[];
};

export const Chart = ({ dataPoints }: ChartProps) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
