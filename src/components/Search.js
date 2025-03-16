import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

function Search({ onSearch }) {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!startLocation || !endLocation) return;

    setIsSearching(true);
    try {
      // Call the onSearch prop with start and end locations
      await onSearch(startLocation, endLocation);
      // Optional: Add success feedback
      console.log('Route found successfully!');
    } catch (error) {
      // Handle any errors
      console.error('Error finding route:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleClear = (field) => {
    if (field === 'start') {
      setStartLocation('');
    } else {
      setEndLocation('');
    }
  };

  const handleClearAll = () => {
    setStartLocation('');
    setEndLocation('');
  };

  const handleSwapLocations = () => {
    const temp = startLocation;
    setStartLocation(endLocation);
    setEndLocation(temp);
  };

  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-fields">
          <div className="search-field">
            <div className="input-group">
              <div className="input-icon">
                <i className="fas fa-map-marker-alt start-icon"></i>
              </div>
              <input
                type="text"
                value={startLocation}
                onChange={(e) => setStartLocation(e.target.value)}
                placeholder="Enter start location"
                className="search-input"
                required
              />
              {startLocation && (
                <button
                  type="button"
                  className="clear-button"
                  onClick={() => handleClear('start')}
                  aria-label="Clear start location"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>

          <div className="location-divider">
            <div className="divider-line"></div>
            <button 
              type="button" 
              className="swap-button"
              onClick={handleSwapLocations}
              aria-label="Swap locations"
            >
              <i className="fas fa-exchange-alt"></i>
            </button>
            <div className="divider-line"></div>
          </div>

          <div className="search-field">
            <div className="input-group">
              <div className="input-icon">
                <i className="fas fa-map-marker-alt end-icon"></i>
              </div>
              <input
                type="text"
                value={endLocation}
                onChange={(e) => setEndLocation(e.target.value)}
                placeholder="Enter destination"
                className="search-input"
                required
              />
              {endLocation && (
                <button
                  type="button"
                  className="clear-button"
                  onClick={() => handleClear('end')}
                  aria-label="Clear destination"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="search-actions">
          <button
            type="button"
            className="clear-all-button"
            onClick={handleClearAll}
            disabled={!startLocation && !endLocation}
          >
            <i className="fas fa-trash-alt"></i>
            Clear All
          </button>
          <button
            type="submit"
            className={`search-button ${isSearching ? 'loading' : ''}`}
            disabled={!startLocation || !endLocation || isSearching}
          >
            {isSearching ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Searching...
              </>
            ) : (
              <>
                <i className="fas fa-search"></i>
                Search Route
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;