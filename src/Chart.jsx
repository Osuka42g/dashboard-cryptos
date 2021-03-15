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
  Brush,
} from "recharts";

const Chart = (props) => {
  const { label, color, onlyBrush = false, } = props;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`datasets/${label}.csv`)
      .then((response) => response.text())
      .then((content) => {
        const parsed = readString(content, { delimiter: ",", header: true });
        const converted = parsed.data.map((row) => ({
          ...row,
          Close: parseFloat(row.Close),
        }));
        setData(converted);
        setIsLoading(false);
      });
    }, []);
    
    if(onlyBrush) {
      return (
        <ResponsiveContainer width="100%" height={45}>
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
          <XAxis dataKey="Date" />
          <YAxis
            type={"number"}
          />
          {/* <CartesianGrid strokeDasharray="3 3" />
          {/* <Line
            type="monotone"
            dataKey="Close"
            stroke={color}
            fill={color}
            dot={false}
          /> */}

          <Brush data={data} dataKey="Date" fill={"#f29e4c"} />
        </LineChart>
        </ResponsiveContainer>
      );
  
  }

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
