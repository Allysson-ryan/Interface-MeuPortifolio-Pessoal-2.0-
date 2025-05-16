import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/index.css";
import AppRoutes from "./routes";
import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <Notifications position="top-right" zIndex={2077} />
      <AppRoutes />
    </MantineProvider>
  </StrictMode>
);
