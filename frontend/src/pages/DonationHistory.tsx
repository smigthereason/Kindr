import React from 'react';
import '../styles/DonationHistory.css';
import image1 from '../assets/Group 3.jpg';
import image2 from '../assets/Group 3 (2).jpg';
import kindrLogo from '../assets/kindr-logo-white 1.png';
import pieChartImage from '../assets/pie-chart.png';
import barGraphImage from '../assets/graph-bar.png';
import settingsImage from '../assets/gear.png';
import profileImage from '../assets/man.png';

const donationData = [
  {
    id: 1,
    charity: 'Child',
    amount: '$100',
    total: '$10.00',
    status: 'Inactive',
    date: 'February 21, 2021',
    imageUrl: image1
  },
  {
    id: 2,
    charity: 'School',
    amount: '$250',
    total: '$10.00',
    status: 'Active',
    date: 'February 14, 2021',
    imageUrl: image2
  },
  {
    id: 3,
    charity: 'Food',
    amount: '$300',
    total: '$10.00',
    status: 'Active',
    date: 'January 14, 2021',
    imageUrl: image2
  },
];

const DonationHistory: React.FC = () => {
  return (
    <div className="donation-history-container">
      <div className="sidebar">
        <img src={kindrLogo} alt="Kindr Logo" className="kindr-logo" />
        <div className="logo-divider"></div> {/* Line below the logo */}

        <nav className="sidebar-nav">
          <a href="#dashboard" className="sidebar-item">
            <img src={pieChartImage} alt="Dashboard" className="sidebar-icon" />
            Dashboard
          </a>
          <a href="#donations" className="sidebar-item">
            <img src={barGraphImage} alt="Donations" className="sidebar-icon" />
            Donations
          </a>
          <a href="#settings" className="sidebar-item">
            <img src={settingsImage} alt="Settings" className="sidebar-icon" />
            Settings
          </a>
        </nav>

        {/* Profile Section */}
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-photo" />
          <div className="profile-details">
            <p className="profile-name">John Doe</p>
            
          </div>
          <div className="profile-controls">
            <button className="arrow-button">▲</button>
            <button className="arrow-button">▼</button>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="dashboard-section">
          <h1>Dashboard</h1>
        </div>
        <div className="content">
          <h2>Donations History</h2>
          <table>
            <thead className="table-header">
              <tr>
                <th>Transactions</th>
                <th>Amount</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
          </table>
          <div className="header-divider"></div> {/* Thin line below the table headers */}
          <table>
            <tbody>
              {donationData.map((donation) => (
                <tr key={donation.id}>
                  <td>
                    <img src={donation.imageUrl} alt={donation.charity} className="transaction-image" />
                    {donation.charity}
                  </td>
                  <td>{donation.amount}</td>
                  <td>{donation.total}</td>
                  <td className={donation.status.toLowerCase()}>{donation.status}</td>
                  <td>{donation.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="donation-button">See More</button>
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;
