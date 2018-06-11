// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import styles from './Home.css';
import { HotTable } from "react-handsontable";

type Props = [
  ["", "Ford", "Volvo", "Toyota", "Honda"],
  ["2016", 10, 11, 12, 13],
  ["2017", 20, 11, 14, 13],
  ["2018", 30, 15, 12, 13]
];

export default class Table extends Component<Props> {
  props: Props;

  render() {
    return (
      <div id="table">
        <HotTable
          root="hot"
          settings={{
            data: this.props,
            colHeaders: true,
            rowHeaders: true,
            width: 600,
            height: 300,
            stretchH: "all"
          }}
        />
      </div>
    );
  }
}
