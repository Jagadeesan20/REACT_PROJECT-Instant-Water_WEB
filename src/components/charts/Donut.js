import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./chart.css";

const Donut = () => {
  return (
    <div className="donut">
      <Doughnut
        data={{
          labels: ["paid", "pending"],

          datasets: [
            {
              label: "My First Dataset",
              data: [400, 100],
              backgroundColor: ["#47e684", "#db2360"],
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          legend: {
            display: true,
            responsive: true,
            maintainAspectRatio: false,

            labels: {
              usePointStyle: true,
              padding: 30,
            },
          },
        }}
      />
    </div>
  );
};

export default Donut;
