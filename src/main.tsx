import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./Register";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
