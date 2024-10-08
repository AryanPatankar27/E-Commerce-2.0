import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage';
import Electronics from './Components/Electronics';
import Clothing from './Components/Clothing';
import Appliances from './Components/Appliances';
import Sports from './Components/Sports';
import Socialactivity from './Components/socialactivity';
import EnviormentalDayForm from './Components/enviormentalDayform';
import ReadingDayForm from './Components/readingDayForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/socialactivity" element={<Socialactivity />} />
        <Route path="/environment-form" element={<EnviormentalDayForm />} />
        <Route path="/reading-form" element={<ReadingDayForm />} />
      </Routes>
    </Router>
  );
}