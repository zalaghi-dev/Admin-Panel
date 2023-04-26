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
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";
const SessionsCard = () => {
  const [sessions, setSessions] = useState([
    35232, 15745, 25642, 10471, 30232, 40023, 1235,
  ]);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
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
        label: "Sessions",
        data: sessions,
        borderColor: "rgba(255,255,255,0.7)",
        backgroundColor: "rgba(255,255,255,0.3)",
        fill: "start",
        pointRadius:1,
        tension: 0.4,
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
        Sessions {`( ${sessions.slice(-1)} K )`}
      </Typography>
      <Line options={options} data={data} />
    </Card>
  );
};

export default SessionsCard;
