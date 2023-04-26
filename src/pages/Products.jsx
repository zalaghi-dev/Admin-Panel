import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Products = () => {
  const [model, setModel] = useState("");
  const labels = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "Case",
    "GPU",
    "CPU",
    "Mother Board",
    "Power",
    "Headset",
    "Fan",
    "RAM",
  ];
  const handleChange = (event) => {
    setModel(event.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: { xs: "100%", md: "70%" } }}
      m="0 auto"
      p={3}
    >
      <TextField sx={{ m: 1 }} label="Name" />
      <TextField type="number" sx={{ m: 1 }} label="Price $" />
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="product-model">Model</InputLabel>
        <Select
          labelId="product-model"
          id="product-model1"
          value={model}
          label="Model"
          onChange={handleChange}
        >
          {labels.map((e, index) => (
            <MenuItem key={index} value={index}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        sx={{ m: 1 }}
        label="Keywords"
        multiline
        defaultValue="#products #henry"
        rows={4}
      />
      <Box>
        <IconButton
          olor="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
        <Button color="secondary" sx={{ mx: 2 }} variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Products;
