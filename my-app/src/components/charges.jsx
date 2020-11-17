import React, { Component } from 'react';
// import Chart from 'chart.js';
var Chart = require("chart.js");


class Charges extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
    this.state = {
      bar_one: [],
      bar_two: []
    }
  }
  componentDidMount() {
    const node = this.node;

    // all based around total # cases
      //each bar based around different filters of these cases (bodycam bar, among the # of cases w bodycam, whats the percentage charge/not charge/etc)

    var noBodycamChart = new Chart(node, {
      type: "bar",
      data: {
        // x axis
        labels: ["Charged with a crime", "No known charges", "pending"],
        // the different bars
        datasets: [
          {
            label: "Cases with bodycams or other video",
            // % of cases w bodycams
            data: [30, 33, 27],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ]
          },
          {
            label: "Cases with no bodycams",
            data: [30, 33, 27],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ]
          },
          // {
          //   label: "Cases with other video form",
          //   data: [10, 29, 5],
          //   backgroundColor: [
          //     "rgba(54, 162, 235, 0.2)",
          //     "rgba(54, 162, 235, 0.2)",
          //     "rgba(54, 162, 235, 0.2)",

          //   ]
          // },
        ]
      }
    });
  }

  render() {
    return (
      <div class="chart-container" style={{position: 'relative', width: '35vw'}}>
        <canvas
          ref={node => (this.node = node)}
        />
      </div>
    );
  }

}

export default Charges;
