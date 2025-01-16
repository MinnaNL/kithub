import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatPage from "./pages/CatPage";
import LandingPage from "./pages/LandingPage";
import Header from "./components/GeneralUI/Header";
import "./assets/global.css"; // Ensure global styles are imported

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cats" element={<HomePage />} />
          <Route path="/cats/:id" element={<CatPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
