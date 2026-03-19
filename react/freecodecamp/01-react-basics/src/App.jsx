import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import { Home } from "./Components/Home";
import { Card } from "./Components/Card";
import { Page1 } from "./Components/Page1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Page1" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
