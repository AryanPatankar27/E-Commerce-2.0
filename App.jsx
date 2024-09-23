import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import Electronics from './components/Electronics';
import Clothing from './components/Clothing';
import Appliances from './components/Appliances';
import Sports from './components/Sports';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </Router>
  );
}

