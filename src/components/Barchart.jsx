import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables} from "chart.js";
Chart.register(...registerables)

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label:'Sales  ', 
      data: [250, 150, 180, 170, 160, 220, 185, 195, 190, 235, 210, 200],
      backgroundColor: [
        "rgb(54, 162, 235)",  
        "rgb(125, 125, 125, 0.22)",
        "rgb(125, 125, 125, 0.22)",
        "rgb(125, 125, 125, 0.22)",
        "rgb(125, 125, 125, 0.22)",
        "rgb(125, 125, 125, 0.22)",
        "rgb(125, 125, 125, 0.22)",
        "rgb(125, 125, 125, 0.22)",
        "rgb(125, 125, 125, 0.22)",
        "rgb(125, 125, 125, 0.22)",
        "rgb(125, 125, 125, 0.22)",
        "rgb(125, 125, 125, 0.22)",
      ],
      borderRadius: 10,
      hoverOffset: 4,
    },
  ],
};

const options = {
  maintainAspectRatio: false, 
  scales: {
    y: {
      grid: {
        display: false,
        drawBorder: false
      },  
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false

      },
    },
  },
};



const Barchart = () => {
  return (
    <div>
      <Bar data={data} options={options} height={280}/>
    </div>
  );
};

export default Barchart;
