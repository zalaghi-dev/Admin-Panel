import { Card, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
const UsersCard = () => {
  const [users, setUsers] = useState([
    1000, 2312, 3222, 6666, 5000, 2222, 10322,
  ]);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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
        label: "Users",
        data: users,
        backgroundColor: "rgba(255,255,255,0.7)",
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
        Users {`( ${users.slice(-1)}  )`}
      </Typography>
      <Bar options={options} data={data} />
    </Card>
  );
};

export default UsersCard;
