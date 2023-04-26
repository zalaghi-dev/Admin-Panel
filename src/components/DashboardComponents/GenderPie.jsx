import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Card, Typography } from "@mui/material";

const GenderPie = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Woman", "Man"],
    datasets: [
      {
        label: "Gender",
        data: [2464, 7858],
        backgroundColor: ["violet", "darkblue"],
        borderColor: ["violet", "darkblue"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card
      variant="outlined"
      sx={{
        p: 4,
        m: 2,
        borderRadius: 7,
        display: "flex",
        height: "200px",
        width: "340px",
      }}
      className="blue-gradient"
    >
      <Typography color="white" variant="h5" fontWeight="bolder">
        Gendar
      </Typography>
      <Doughnut
        options={{ plugins: { legend: { display: false } } }}
        data={data}
      />
    </Card>
  );
};

export default GenderPie;
