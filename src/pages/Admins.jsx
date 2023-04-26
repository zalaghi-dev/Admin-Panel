import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Avatar,
  Badge,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { users } from "../constant/usersData";
import { colorSetter } from "../utils/colorSetter";
import { useState } from "react";
const Admins = () => {
  const [admins, setAdmins] = useState(users);
  const handleRemoveAdmin = (user) => {
    setAdmins((prev) => {
      const copyState = [...prev];
      const index = prev.findIndex((u) => u.user === user);
      copyState[index].isAdmin = false;
      return copyState;
    });
  };
  return (
    <Box p={3}>
      <Typography pb={2} variant="h4">
        Admins
      </Typography>
      {admins.map((el, index) => (
        <Accordion
          sx={{ display: el.isAdmin ? "inherit" : "none" }}
          key={index}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
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
              <Typography p={1} fontWeight="bolder">
                {el.user}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                p: 1,
              }}
            >
              <FormControlLabel
                control={<Switch color="secondary" defaultChecked />}
                label="Add New Admins"
              />
              <FormControlLabel
                control={<Switch color="secondary" />}
                label="Add Blogs"
              />
              <FormControlLabel
                control={<Switch color="secondary" defaultChecked />}
                label="Add Products"
              />
              <FormControlLabel
                control={<Switch color="secondary" />}
                label="Change Theme"
              />
              <Button
                onClick={() => {
                  handleRemoveAdmin(el.user);
                }}
                variant="contained"
                color="error"
              >
                Remove
              </Button>
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Admins;
