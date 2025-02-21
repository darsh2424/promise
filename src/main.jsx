import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { LoveProvider } from "./context/LoveContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/promise/">
    <ThemeProvider>
      <LoveProvider>
        <App />
      </LoveProvider>
    </ThemeProvider>
  </BrowserRouter>
);
