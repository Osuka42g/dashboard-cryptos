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
  const { label, color, } = props;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [domain, setDomain] = useState([0, 0]);

  useEffect(() => {
    fetch(`datasets/${label}.csv`)
      .then((response) => response.text())
      .then((content) => {
        let min = 100000;
        let max = 0;
        const parsed = readString(content, { delimiter: ",", header: true });
        const converted = parsed.data.map((row) => {
          if (row.Close < min) {
            min = row.Close;
          }
          if (row.Close > max) {
            max = row.Close;
          }
          return {
            ...row,
            Close: parseFloat(row.Close),
          };
        });
        setDomain([min, max]);
        setData(converted);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h4 style={{ textAlign: "center", marginTop: "10%" }}>Loading</h4>;
  }
  return (
    <div style={{ width: "100%" }}>
      <h4>{label}</h4>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={400}
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
          <YAxis
            type={"number"}
            padding={{ bottom: 10, top: 10 }}
            label="USD"
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Close"
            stroke={color}
            fill={color}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
