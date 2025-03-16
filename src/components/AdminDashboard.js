import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/admin-login');
  };

  return (
    <div className="admin-dashboard">
      <nav className="dashboard-nav">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <button className="logout-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </nav>
      
      <div className="dashboard-content">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <i className="fas fa-users"></i>
            <h3>Manage Users</h3>
            <p>View and manage user accounts</p>
          </div>
          
          <div className="dashboard-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Manage Locations</h3>
            <p>Add or edit location data</p>
          </div>
          
          <div className="dashboard-card">
            <i className="fas fa-route"></i>
            <h3>Route Management</h3>
            <p>Configure route settings</p>
          </div>
          
          <div className="dashboard-card">
            <i className="fas fa-chart-bar"></i>
            <h3>Analytics</h3>
            <p>View system analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;