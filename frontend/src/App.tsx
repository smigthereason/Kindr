import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Dashboard from './pages/Dashboard';
import Donations from './pages/DonationHistory';
import Settings from './pages/Settings';
import ManageProfile from './pages/ManageProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} /> {/* Default dashboard view */}
          <Route path="donations" element={<Donations />} />
          <Route path="settings" element={<Settings />} />
          <Route path="manage-profile" element={<ManageProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
