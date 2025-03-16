import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Map from './components/Map';
import Search from './components/Search';
import RouteDisplay from './components/RouteDisplay';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Profile from './components/Profile';
import Signup from './components/Signup';
import ManageLocations from './components/ManageLocations';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';

function App() {
  
  // Centralized State Variables:
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [route, setRoute] = useState(null);

  // Use useCallback for Event Handlers:
  const handleSearch = useCallback((start, end) => {
    setStartLocation(start);
    setEndLocation(end);

    // Simulate route data from an API (replace with real API call)
    const routeData = {
      start,
      end,
      steps: [
        "Turn left at Main Street",
        "Continue straight for 1 mile",
        "Turn right onto University Avenue"
      ]
    };
    setRoute(routeData);
  }, []);

  const handleLogin = useCallback((userType) => {
    setIsLoggedIn(true);
    setIsAdmin(userType === 'admin');
  }, []);

  // UseMemo for Complex Values (if needed):
  // If you had a complex calculation based on state, memoize it with useMemo:
  // const someValue = useMemo(() => { ... }, [dependencies]);

  // Routing Structure (Inside the Component):
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" />;
  };

 const AdminRoute = ({ children }) => {
   return isAdmin ? children : <Navigate to="/admin-login" />;
 };

  // Check if user is logged in (you can modify this based on your auth logic)
//   const isAuthenticated = localStorage.getItem('user') !== null;
  const isAuthenticated = true;

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <h1>Campus Navigation System</h1>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/profile" 
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} 
          />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/map" element={<Map />} />
          <Route path="/search" element={<Search />} />
          <Route path="/route" element={<RouteDisplay />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/manage-location" element={<ManageLocations />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;