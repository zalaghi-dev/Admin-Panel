import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { useState } from "react";
import { colorsContext } from "../context/colorsContext";
const Theme = ({ children }) => {
  const [primary, setPrimary] = useState("#1976d2");
  const [secondary, setSecondary] = useState("#a62121");
  const [mode, setMode] = useState("light");
  const [fSize, setfSize] = useState(14);
  let theme = createTheme({
    palette: {
      mode: mode,
      primary: { main: primary },
      secondary: { main: secondary },
    },
    typography: { fontSize: fSize },
  });
  theme = responsiveFontSizes(theme);

  return (
    <colorsContext.Provider
      value={{ primary, secondary, mode,fSize, setSecondary, setPrimary, setMode,setfSize }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </colorsContext.Provider>
  );
};

export default Theme;
