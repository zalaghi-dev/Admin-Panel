import { CssBaseline } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages";
import "./index.css";
import Theme from "./theme/Theme";
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Theme>
      <CssBaseline />
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>
);
