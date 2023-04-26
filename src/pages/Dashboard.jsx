import UsersCard from "../components/DashboardComponents/UsersCard";
import IncomeCard from "../components/DashboardComponents/IncomeCard";
import GenderPie from "../components/DashboardComponents/GenderPie";
import { Box, Paper } from "@mui/material";
import ProductsChart from "../components/DashboardComponents/ProductsChart";
import SessionsCard from "../components/DashboardComponents/SesshionsCard";
import ActivityTable from "../components/DashboardComponents/ActivityTable";
const Dashboard = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="start"
        flexWrap="wrap"
        justifyContent="center"
      >
        <UsersCard />
        <IncomeCard />
        <SessionsCard />
        <GenderPie />
      </Box>
      <Box display="flex" p={3} justifyContent="center">
        <ProductsChart />
      </Box>
      <Paper sx={{ width:"100%"}}>
        <ActivityTable  />
      </Paper>
    </>
  );
};

export default Dashboard;
