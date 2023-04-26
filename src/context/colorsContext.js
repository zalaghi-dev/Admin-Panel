import { createContext } from "react";
export const colorsContext = createContext({
  primary: "",
  setPrimary: () => {},
  secondary: "",
  setSecondary: () => {},
  mode: "",
  setMode: () => {},
  fSize: 0,
  setfSize: () => {},
});
