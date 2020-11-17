import React, { Component } from 'react';
// import Chart from 'chart.js';
import CheckList from './checkList';

var Chart = require("chart.js");


class Charges extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
    this.state = {
      filters: []
    }
  }

  percentBreak = () => {

  }

  calculateData = () => {
    if (this.state.filters.length === 0) {
      //will replace with function or call to get breakdown by percentage w each charge
      return([30, 30, 30])
    } else {
      //filter total # of cases by checked fields (ex. bodycam, race, etc.)
      //then call same function to get breakdown by percentage
    }
  }

  componentDidMount() {
    const node = this.node;

    // all based around total # cases
      //each bar based around different filters of these cases (bodycam bar, among the # of cases w bodycam, whats the percentage charge/not charge/etc)

    var noBodycamChart = new Chart(node, {
      type: "pie",
      data: {
        // x axis
        labels: ["Charged with a crime", "No known charges", "pending"],

        // the different bars
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)"
          ],
      }],
      }
    });
  }



  render() {
    return (
      <div class="chart-container" style={{position: 'relative', width: '35vw'}}>
        With Bodycam
        <canvas
          ref={node => (this.node = node)}
        />
        <CheckList />
      </div>
    );
  }

}

export default Charges;
