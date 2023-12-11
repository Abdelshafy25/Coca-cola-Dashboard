import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [
            "Quality Loss",
            "Quality Loss",
            "Break-down",
            "Cleansing process",
            "Change over time",
            "Idle",
            "Minor stops",
          ],
        },
        colors: [
          "#2EC4B6",
          "#2EC4B6",
          "#F40009",
          "#F40009",
          "#F40009",
          "#F40009",
          "#F40009",
        ],
        plotOptions: {
          bar: {
            columnWidth: 20,
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
      },
      series: [
        {
          name: "",
          data: ["15%", "20%", "5%", "1%", "2%", "2%", "5%"],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="200"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ApexChart;
