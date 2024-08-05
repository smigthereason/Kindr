import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Beneficiaries from './pages/Beneficiaries';
import Donations from './pages/Donations';
import Settings from './pages/Settings';
import './App.css'
import Sidebar from './components/Sidebar';
import StoryMngt from './pages/StoryMngt';

function App() {

  return (
    <Router>
    <div className=" flex w-screen h-screen">
      <Sidebar />
      <main className="ml-60 flex-1 p-4 text-white ">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/storymngt" element={<StoryMngt />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  </Router>
  )
}

export default App
