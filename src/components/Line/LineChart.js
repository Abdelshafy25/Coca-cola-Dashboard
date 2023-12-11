import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "",
          data: [
            100, 150, 180, 190, 170, 130, 110, 110, 150, 170, 190, 170, 140,
            120, 100, 80,
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
            "24 Jan",
          ],
          labels: {
            style: {
              fontSize: "10px",
              fontFamily: "Montserrat",
              fontWight: 500,
            },
          },
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
          type="line"
          height={200}
        />
      </div>
    );
  }
}

export default LineChart;
