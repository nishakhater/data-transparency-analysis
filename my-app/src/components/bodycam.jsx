import React, { Component } from 'react';
// import Chart from 'chart.js';
var Chart = require("chart.js");


class BodyCam extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "# of Cases",
            data: [12, 19, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ]
          }
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

export default BodyCam;
