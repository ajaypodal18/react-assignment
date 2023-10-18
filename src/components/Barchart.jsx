import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
  
};

const options = {
  responsive: true,
}

const Barchart = () => {
  return (
    <div>
      <Bar style={{height:'300px', width:'100%'}} data={data} options={options} />
    </div>
  );
};

export default Barchart;
