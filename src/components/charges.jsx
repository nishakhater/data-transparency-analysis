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
        labels: ["Charged with a crime", "No known charges"],
        // the different bars
        datasets: [
          {
            label: "Cases with bodycams or other video",
            // % of cases w bodycams
            // data: [36, 586], total:622 
            data: [5.8, 94.2],
            backgroundColor: [
              "rgba(5, 45, 143, 0.2)",
              "rgba(5, 45, 143, 0.2)",
              "rgba(5, 45, 143, 0.2)",
            ]
          },
          {
            label: "Cases with no bodycams",
            // data: [34, 4855], total: 4889
            data: [.7, 99.3],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ]
          },
          {
            label: "Cases with unspecified video",
            // data: [76, 2920], total: 2996
            data: [2.5, 97.5],
            backgroundColor: [
              "rgba(170, 170, 170, 0.2)",
              "rgba(170, 170, 170, 0.2)",
              "rgba(170, 170, 170, 0.2)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div class="chart-container" style={{position: 'relative', width: '80vw'}}>
        <canvas
          ref={node => (this.node = node)}
        />
      </div>
    );
  }

}

export default Charges;
