import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import kindrLogo from '../assets/kindr-logo-white 1.png';
import pieChartImage from '../assets/pie-chart.png';
import barGraphImage from '../assets/graph-bar.png';
import settingsImage from '../assets/gear.png';
import profileImage from '../assets/man.png';
import '../styles/MainLayout.css';

const MainLayout: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleManageProfile = () => {
    navigate('/manage-profile'); // Navigate to Manage Profile
    setIsDropdownOpen(false); // Close the dropdown after navigation
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <img src={kindrLogo} alt="Kindr Logo" className="kindr-logo" />
        <div className="logo-divider"></div>

        <nav className="sidebar-nav">
          <Link to="/" className="sidebar-item">
            <img src={pieChartImage} alt="Dashboard" className="sidebar-icon" />
            <span>Dashboard</span>
          </Link>
          <Link to="/donations" className="sidebar-item">
            <img src={barGraphImage} alt="Donations" className="sidebar-icon" />
            <span>Donations</span>
          </Link>
          <Link to="/settings" className="sidebar-item">
            <img src={settingsImage} alt="Settings" className="sidebar-icon" />
            <span>Settings</span>
          </Link>
        </nav>

        {/* Profile Section */}
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-photo" />
          <div className="profile-details">
            <p className="profile-name">John Doe</p>
          </div>
          <div className="profile-controls">
            <button className="arrow-button" onClick={toggleDropdown}>▲</button>
            {isDropdownOpen && (
              <div className="profile-dropdown">
                <div className="dropdown-item" onClick={handleManageProfile}>Manage Profile</div>
                <div className="dropdown-item">Log Out</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="main-content">
        <Outlet /> {/* This is where the child routes, like Manage Profile, will render */}
      </div>
    </div>
  );
};

export default MainLayout;
