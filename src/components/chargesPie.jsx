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
      return ([30, 30, 30])
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
        labels: ["Charged with a crime", "No known charges"],

        // the different bars
        datasets: [{
          // gendered: female
          // total: 425, charged: 26, not: 399;;
          // data: [6.1, 93.9],
          // gendered: male
          // total: 8056, charged: 120, not: 7936
          // data: [1.5, 98.5],
          // gendered: transgender
          // total: 0, charged: 0, not: 9
          // data: [0, 100],
          // gendered: unknown,
          // total: 0, charged: 0, not: 17
          // data: [0, 17],

          // race: white,
          // total: 3739, charged: 56, not: 3683
          // data: [1.5, 98.5],
          // race: black,
          // total: 2138, charged: 68, not: 2070
          // data: [3.1, 96.8],
          // race: hispanic,
          // total: 1467, charged: 17, not: 1450
          // data: [1.2, 98.8],
          // race: asian,
          // total: 131, charged: 2, not: 129
          // data: [1.5, 98.5],
          // race: native american,
          // total: 119, charged: 3, not: 116
          // data: [2.5, 97.5],

          // mental illness: perceived no,
          // total: 5415, charged: 114, not: 5301
          // data: [2.1, 97.9],
          // mental illness: perceived yes,
          // total: 1598, charged: 12, not: 1586
          // data: [.8, 99.2],
          // mental illness: unknown,
          // total: 1176, charged: 15, not: 1161
          // data: [1.3, 98.7],
          // mental illness: drug use,
          // total: 318, charged: 5, not: 313
          data: [1.6, 98.4],
          backgroundColor: [
            "rgba(5, 45, 143, 0.5)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)"
          ],
        }],
      }
    });
  }



  render() {
    return (
      <div class="chart-container" style={{ position: 'relative', width: '35vw' }}>
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
