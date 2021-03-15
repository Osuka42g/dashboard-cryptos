import React, { useState, useEffect } from "react";
import { LineChart, Line } from "recharts";

import { Grid, Row, Col } from "react-flexbox-grid";

import Chart from "./Chart";

import datasource from "./datasource";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(datasource);
  }, []);

  const charts = [
    {
      title: "BTC",
    },
    {
      title: "ETH",
    },
    {
      title: "XRP",
    },
    {
      title: "BTH",
    },
  ];

  return (
    <Grid fluid>
      <Row>
        {charts.map((e) => {
          return <Col xs={6} md={4}>
            <Chart {...e} />
          </Col>;
        })}
      </Row>
    </Grid>
  );

  // return <div className="App"><Chart /></div>;
}

export default App;
