import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import Map from './Map';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const [route, setRoute] = useState(null);
  const [locations, setLocations] = useState({
    start: '',
    end: ''
  });

  const handleSearch = async (start, end) => {
    try {
      // Update locations immediately to show on map
      setLocations({ start, end });
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set route data
      setRoute({
        start,
        end,
        distance: '5.2 km',
        duration: '15 min'
      });
    } catch (error) {
      console.error('Error finding route:', error);
      alert('Error finding route. Please try again.');
    }
  };

  return (
    <div className="profile-page">
      {/* <nav className="profile-nav">
        <div className="nav-content">
          <div className="nav-left">
            <h1>Navigation App</h1>
          </div>
          <div className="nav-right">
            <Link to="/manage-locations" className="admin-link">
              <i className="fas fa-cog"></i>
              <span>Manage Locations</span>
            </Link>
            <button 
              type="button" 
              className="logout-button" 
              onClick={() => navigate('/login')}
            >
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav> */}

      <div className="profile-content">
        <div className="sidebar">
          <Search onSearch={handleSearch} />
          {route && (
            <div className="route-info">
              <h3>Route Details</h3>
              <p>From: {route.start}</p>
              <p>To: {route.end}</p>
              <p>Distance: {route.distance}</p>
              <p>Duration: {route.duration}</p>
            </div>
          )}
        </div>
        <div className="main-content">
          <Map 
            startLocation={locations.start}
            endLocation={locations.end}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;