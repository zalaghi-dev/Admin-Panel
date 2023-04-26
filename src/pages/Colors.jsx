import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { colorsContext } from "../context/colorsContext";
const Colors = () => {
  const colors = useContext(colorsContext);
  return (
    <>
      <Box p={3} display="flex" flexWrap="wrap">
        <Box m={2} p={2} border="1px solid gray" borderRadius={5} id="swatch">
          <input
            type="color"
            id="color"
            name="color"
            value={colors.primary}
            onChange={(e) => colors.setPrimary(e.target.value)}
          />
          <Typography variant="h6">Primary:</Typography>
          <Typography variant="body1">{colors.primary}</Typography>
        </Box>
        <Box m={2} p={2} border="1px solid gray" borderRadius={5} id="swatch">
          <input
            type="color"
            id="color"
            name="color"
            value={colors.secondary}
            onChange={(e) => colors.setSecondary(e.target.value)}
          />
          <Typography variant="h6">Secondary:</Typography>
          <Typography variant="body1">{colors.secondary}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Colors;
