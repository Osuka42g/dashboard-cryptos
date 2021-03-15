import React, { useState, useEffect } from "react";
import { readString } from "react-papaparse";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = (props) => {
  const { label } = props;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("datasets/coin_Bitcoin.csv")
      .then((response) => response.text())
      .then((content) => {
        const parsed = readString(content, { delimiter: ",", header: true });
        const converted = parsed.data.map(row => ({ Close: parseFloat(row.Close), ...row }));
        setData(converted);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h4 style={{ textAlign: "center", marginTop: "45%" }}>Loading</h4>;
  }
  return (
    <div style={{ width: "100%" }}>
      <h4>{label}</h4>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="cryptoCharts"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis type={"number"} domain={["dataMin", "dataMax"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Close"
            stroke="#8884d8"
            fill="#8884d8"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
