import { Card, Typography } from "@mui/material";
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
import { Line } from "react-chartjs-2";
import { useState } from "react";
const IncomeCard = () => {
  const [income, setIncome] = useState([
    100, 10000, 4400, 7000, 1000, 8000, 19959,
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
  const options = {
    scales: {
      x: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,

        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: income,
        borderColor: "rgba(255,255,255,0.7)",
        backgroundColor: "transparent",
        pointRadius: 5,
      },
    ],
  };

  return (
    <Card
      variant="outlined"
      sx={{ p: 4, m: 2, borderRadius: 7,height:"200px" }}
      className="blue-gradient"
    >
      <Typography color="white" variant="h5" fontWeight="bolder">
        Income {`( ${income.slice(-1)} $ )`}
      </Typography>
      <Line options={options} data={data} />
    </Card>
  );
};

export default IncomeCard;
