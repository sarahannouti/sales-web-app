import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./theme";
import { router } from "./router";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
