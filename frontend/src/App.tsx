import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatPage from './pages/CatPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cats" element={<HomePage />} />
        <Route path="/cats/:id" element={<CatPage />} />
      </Routes>
    </Router>
  );
};

export default App;