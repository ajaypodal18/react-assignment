import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Typography } from "@mui/material";
Chart.register(ArcElement);

const data = {
  datasets: [
    {
      label: "Active Users",
      data: [30, 90, 70],
      backgroundColor: [
        "rgb(197, 137, 205)",
        "rgb(54, 162, 235)",
        "rgb(128,128,128,0.33)",
      ],
      hoverOffset: 4,
    },
  ],
};

const textCenter = {
  id: "textCenter",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    // console.log(chart.chartArea.width);

    let sliceThicknessPixel = [195, 210, 230];
    sliceThicknessPixel.forEach((thickness, index) => {
      chart.getDatasetMeta(0).data[index].outerRadius =
        (chart.chartArea.width / thickness) * 100;
    });

    let sliceThicknessPixel2 = [320, 300, 290];
    sliceThicknessPixel2.forEach((thickness, index) => {
      chart.getDatasetMeta(0).data[index].innerRadius =
        (chart.chartArea.width / thickness) * 100;
    });

    ctx.save();
    ctx.canvas.width = 800;
    ctx.canvas.height = 800;
    ctx.font = "bolder 16px sans-serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(
      `${data.datasets[0].data[1]} % Total New Customers`,
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

// const options = {
//   responsive: true,
//   maintainAspectRatio: false,
// }

const Piechart = () => {
  return (
    <div>
      <Doughnut data={data} plugins={[textCenter]} />
    </div>
  );
};

export default Piechart;
