import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Box, useTheme } from "@mui/material";
const ProductsChart = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const [products, setProducts] = useState([
    5352, 2131, 3020, 5845, 8485, 1287, 9575, 1579, 8342, 4789, 9535,
  ]);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "Case",
    "GPU",
    "CPU",
    "Mother Board",
    "Power",
    "Headset",
    "Fan",
    "RAM",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Products",
        data: products,
        borderColor: primaryColor,
        backgroundColor: "transparent",
        pointRadius: 5,
        fill: "start",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Products",
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
        suggestedMin: 0,
        suggestedMax: 200,
      },
    },
  };
  return (
    <Box width="80%" display={{xs:"none",md:"block"}}>
      <Box p={2} boxShadow="0px 0px 3px 1px gray" borderRadius={1}>
        <Line options={options} data={data} />
      </Box>
    </Box>
  );
};

export default ProductsChart;
