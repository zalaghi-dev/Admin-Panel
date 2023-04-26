import { Box, Button, Slider, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { colorsContext } from "../context/colorsContext";

const Types = () => {
  const { fSize, setfSize } = useContext(colorsContext);
  const [sizeHandler, setSizeHandler] = useState(fSize);
  return (
    <Box p={3}>
      <Typography pb={2} variant="h4">
        Typography
      </Typography>
      <Box display="flex" alignItems="center" width={300}>
        <Slider max={20} min={5}
          defaultValue={fSize}
          onChange={(e) => setSizeHandler(e.target.value)}
          aria-label="Font Size"
        />
        <Typography p={2} variant="h6">{sizeHandler}</Typography>
      </Box>
      <Button variant="contained" onClick={() => setfSize(sizeHandler)}>
        Save
      </Button>
    </Box>
  );
};

export default Types;
