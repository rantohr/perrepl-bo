import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <SnackbarProvider
          anchorOrigin={{
            horizontal: "center",
            vertical: "top",
          }}
          autoHideDuration={1000}
        >
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
