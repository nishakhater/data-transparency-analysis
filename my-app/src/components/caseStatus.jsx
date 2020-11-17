import React, { Component } from 'react';
var Chart = require("chart.js");

class StatusGraph extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "horizontalBar",
      data: {
        labels: ["Name 1", "Name 2", "Name 3", "Name 3", "Name 3", "Name 3", "Name 3"],
        datasets: [
          {
            label: "# of Cases",
            data: [2006, 2007, 2008, 2009, 2006, 2008, 2009],
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

export default StatusGraph;
