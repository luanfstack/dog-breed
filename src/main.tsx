import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./Register";
import List from "./List";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
