import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Select from "react-select";

import Chart from "./Chart";

import "./App.css";

const colors = [
  "#54478c",
  "#2c699a",
  "#048ba8",
  "#0db39e",
  "#16db93",
  "#83e377",
  "#b9e769",
  "#efea5a",
  "#f1c453",
  "#f29e4c",
];


const currencies = [
  {
    label: "BinanceCoin",
    value: "BinanceCoin",
  },
  {
    label: "Bitcoin",
    value: "Bitcoin",
  },
  {
    value: "BitcoinCash",
    label: "BitcoinCash",
  },
  {
    value: "BitcoinSV",
    label: "BitcoinSV",
  },
  {
    label: "Cardano",
    value: "Cardano",
  },
  {
    label: "EOS",
    value: "EOS",
  },
  {
    label: "Ethereum",
    value: "Ethereum",
  },
  {
    label: "Litecoin",
    value: "Litecoin",
  },
  {
    label: "Stellar",
    value: "Stellar",
  },
  {
    label: "Tether",
    value: "Tether",
  },
  {
    label: "Tezos",
    value: "Tezos",
  },
  {
    label: "XRP",
    value: "XRP",
  },
].map((cur, i) => ({ ...cur, color: colors[i%colors.length] }));

function App() {
  const defaultSelection = [currencies[8], currencies[9]];
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSelected(defaultSelection);
  }, []);

  return (
    <Grid fluid>
      <Row>
        {selected.map((e, i) => {
          return (
            <Col xs={6} md={4} key={i}>
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
