import "@/app/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { AppEntry } from "./app/App.tsx";
import { appStore } from "./app/providers/index.ts";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <AppEntry />
    </Provider>
  </React.StrictMode>,
);
