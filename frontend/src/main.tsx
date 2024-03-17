import "@/app/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { AppEntry } from "./app/App.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppEntry />
  </React.StrictMode>,
);
