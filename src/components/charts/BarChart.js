import React from "react";
import { Bar } from "react-chartjs-2";
import "./chart.css";

const BarChart = () => {
  return (
    <div className="barchart">
      <Bar
        data={{
          labels: ["Pending", "Packed", "Delivered", "Cancelled"],
          datasets: [
            {
              data: [15, 45, 30, 10],
              backgroundColor: ["#e6a647", "#47b4e6", "#47e684", "#e647e6"],
              barThickness: 12,
            },
          ],
        }}
        options={{
          scaleShowVerticalLines: false,
          scales: {
            yAxes: [
              {
                ticks: { beginAtZero: true, stepSize: 10, padding: 10 },
                gridLines: {
                  drawBorder: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                  color: "#e3edca",
                  categoryPercentage: 1,
                  barPercentage: 1,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
        }}
      ></Bar>
    </div>
  );
};

export default BarChart;
