import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material";
const PagesLink = ({ name, icon, url }) => {
  const navigate = useNavigate();
  const location = useLocation();
const colors=useTheme().palette
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton  onClick={() => navigate(url)}>
        <ListItemIcon sx={{color:location.pathname===url?colors.secondary.main:""}}>{icon}</ListItemIcon>
        <ListItemText  sx={{color:location.pathname===url?colors.secondary.main:""}} primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default PagesLink;
