import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";  // Importa BrowserRouter

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Aquí se envuelve toda la aplicación */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
