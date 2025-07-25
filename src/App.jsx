import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import HangOutHeader from "./components/Header";
import HangOutFooter from "./components/HangOutFooter";

const App = () => {
  return (
    <Router>
      <HangOutHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <HangOutFooter/>
    </Router>
  );
};

export default App;
