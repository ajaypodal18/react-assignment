import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Typography } from "@mui/material";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 30, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const Value =()=>{
  return
  <Typography>Total New Customers</Typography>
}


const textCenter = {
  id:'textCenter',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const {ctx, data} = chart;
    ctx.save();
    ctx.font = 'bolder 30px sans-serif';
    ctx.fillStyle = 'red';
    ctx.textAlign = 'center';
    ctx.fillText(`${data.datasets[0].data[0]} % Total New Customers`,chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
  }
}


const Piechart = () => {
  return (
    <div>
      <Doughnut data={data} plugins={[textCenter]}/>
    </div>
  );
};

export default Piechart;
