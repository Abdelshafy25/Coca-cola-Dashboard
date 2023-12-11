import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class AreaChart extends React.Component {
  constructor({ color }) {
    super({ color });

    this.state = {
      series: [
        {
          name: "STOCK ABC",
          data: [0, 10, 3, 11, 6, 7, 13, 0],
        },
      ],
      options: {
        chart: {
          type: "area",
          toolbar: {
            show: false,
          },
          height: 170,
          zoom: {
            enabled: false,
          },
        },

        tooltip: { enabled: false },

        colors: color,

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },

        grid: {
          show: false,
        },

        labels: [0, 2, 4, 5, 6, 7, 8, 9],

        xaxis: {
          type: "datetime",
        },
        yaxis: {
          show: false,
          opposite: true,
        },
        legend: {
          enabled: false,
          horizontalAlign: "left",
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
          type="area"
          height={160}
          width={"100%"}
        />
      </div>
    );
  }
}

export default AreaChart;
