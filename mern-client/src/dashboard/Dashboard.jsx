import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome back! Here’s what’s happening with your bookstore today.</p>
      </header>
      <div className="dashboard-content">
        {/* Statistics Section */}
        <div className="stats-container">
          <div className="stat-card fade-in">
            <h2>254</h2>
            <p>Total Books Sold</p>
          </div>
          <div className="stat-card fade-in">
            <h2>$12,890</h2>
            <p>Total Revenue</p>
          </div>
          <div className="stat-card fade-in">
            <h2>186</h2>
            <p>New Orders</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-container">
          <div className="chart-card slide-in">
            <h3>Sales Growth</h3>
            <div className="chart-placeholder">📊</div>
          </div>
          <div className="chart-card slide-in">
            <h3>Customer Engagement</h3>
            <div className="chart-placeholder">📈</div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="action-container">
          <div className="action-card bounce">
            <h3>Add New Book</h3>
            <p>Add new books to your inventory and expand your collection.</p>
            <button className="action-button">Add Book</button>
          </div>
          <div className="action-card bounce">
            <h3>View Customer Feedback</h3>
            <p>Check the latest customer feedback and improve your offerings.</p>
            <button className="action-button">View Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
