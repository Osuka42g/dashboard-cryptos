import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Select from "react-select";

import Chart from "./Chart";

import datasource from "./datasource";

import "./App.css";

const charts = [
  {
    label: "BTC",
    value: "BTC",
  },
  {
    label: "ETH",
    value: "ETH",
  },
  {
    label: "XRP",
    value: "XRP",
  },
  {
    label: "BTH",
    value: "BTH",
  },
];

function App() {
  const defaultSelection = [charts[0], charts[1], charts[2]];

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setData(datasource);
    setSelected(defaultSelection);
  }, []);

  const currencies = charts;

  return (
    <Grid fluid>
      <Row>
        {selected.map((e) => {
          return (
            <Col xs={6} md={4}>
              <Chart {...e} />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Select
            defaultValue={defaultSelection}
            isMulti
            name="currencies-select"
            options={currencies}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={setSelected}
          />
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
