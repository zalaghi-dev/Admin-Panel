import { Box, Typography } from "@mui/material";
import { ErrorOutlineRounded } from "@mui/icons-material";
const Error404 = () => {
  return (
    
    <Box
      width="100%"
      height="100%"
      display="flex"
      position="fixed"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
     className="red-gradient" 
    >
      <Typography color="white" fontSize="250px" display="flex" alignItems="center">
        <ErrorOutlineRounded color="inherit" fontSize="inherit" />
      </Typography>
      <Typography fontWeight="bolder" color="error" variant="h1">
        404
      </Typography>
      <Typography color="white" variant="h4">Ooops! Page Not Found :( !</Typography>
    </Box>
  );
};

export default Error404;
