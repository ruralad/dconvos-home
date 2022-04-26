import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import App from "./App";
import About from "./About";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/roadmap" element={<RoadMap/>} />
      </Routes>
  </BrowserRouter>
);
