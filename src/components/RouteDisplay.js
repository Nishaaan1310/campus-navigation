import React from 'react';

function RouteDisplay({ route }) {
  return (
    <div className="route-display">
      <h2>Route</h2>
      <ol>
        {route.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RouteDisplay;