import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clock from "./components/Clock"; // Import your Clock component

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Clock />} />
    </Routes>
  </Router>
);

export default App;
