import React from "react";
import {
  Avatar,
  Badge,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { users } from "../../constant/usersData";
import { LocationOn, SupervisorAccount } from "@mui/icons-material";
import { colorSetter } from "../../utils/colorSetter";
const ActivityTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <SupervisorAccount />
            </TableCell>
            <TableCell>User</TableCell>
            <TableCell>
              <LocationOn />
            </TableCell>
            <TableCell>Usage</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell>Activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((el, index) => (
            <TableRow key={index}>
              <TableCell>
                <Badge
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                  color={colorSetter(el.status)}
                  overlap="circular"
                >
                  <Avatar
                    sx={{ width: 40, height: 40 }}
                    src={el.userAvatar}
                  ></Avatar>
                </Badge>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bolder">{el.user}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{el.country}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{`${el.usage}%`}</Typography>
                <LinearProgress
                  color="primary"
                  variant="determinate"
                  value={el.usage}
                />
              </TableCell>
              <TableCell>
                <Typography>{el.payment}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{el.activity}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActivityTable;
