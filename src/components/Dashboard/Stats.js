import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class Stats extends React.Component {
  constructor({ color }) {
    super({ color });

    this.state = {
      series: [76],
      options: {
        chart: {
          height: 0,
          width: 0,
          type: "radialBar",
        },
        states: {
          hover: {
            filter: {
              type: "none",
            },
          },
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: 40, //40
            },
            track: {
              background: "#f2f2f2",
              strokeWidth: "60",
              // width: 2,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                fontSize: "10px",
                fontFamily: "Montserrat",
                fontWeight: 600,
                textAlign: "center",
                color: " #000000",
                offsetY: 5,
              },
            },
          },
        },
        tooltip: {
          enabled: false,
        },
        fill: {
          colors: color,
        },
        stroke: {
          lineCap: "round",
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={90} //90
          width={90} //90
        />
      </div>
    );
  }
}

export default Stats;
