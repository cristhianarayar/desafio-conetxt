import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ApiProvider from "./components/ApiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
      </ApiProvider>
  </React.StrictMode>
);
