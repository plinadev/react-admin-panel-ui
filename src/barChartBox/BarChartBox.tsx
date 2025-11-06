import { Bar, BarChart, Tooltip } from "recharts";
import "./barChartBox.scss";

interface BarChartBoxProps {
  title: string;
  chartData: object[];
  dataKey: string;
  color: string;
}
function BarChartBox({ title, chartData, color, dataKey }: BarChartBoxProps) {
  return (
    <div className="barChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <BarChart
          style={{
            width: "100%",
            maxWidth: "300px",
            maxHeight: "150px",
            aspectRatio: 1.618,
          }}
          responsive
          data={chartData}
        >
          <Tooltip
            contentStyle={{
              backgroundColor: "#2a3447",
              borderRadius: "5px",
            }}
            labelStyle={{
              display: "none",
            }}
            cursor={{ fill: "none" }}
          />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </div>
    </div>
  );
}

export default BarChartBox;
