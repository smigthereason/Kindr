import React from 'react';
import image1 from '../assets/Group 3.jpg';
import image2 from '../assets/Group 3 (1).jpg';
import '../styles/DonationHistory.css';

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
        <div className="header-divider"></div> 
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
  );
};

export default DonationHistory;
