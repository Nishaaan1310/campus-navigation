import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <div className="welcome-content">
            <h1>Welcome to Our Community</h1>
            <p>Start your journey with us today!</p>
          </div>
          <div className="background-circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>

        <div className="signup-right">
          <h2>Create Account</h2>
          
          <div className="progress-indicator">
            <div className="progress-icon active">
              <i className="fas fa-user"></i>
            </div>
            <div className="progress-line"></div>
            <div className="progress-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="progress-line"></div>
            <div className="progress-icon">
              <i className="fas fa-check"></i>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="signup-button">
              Sign Up →
            </button>

            <div className="alternative-signup">
              <p>Or sign up with</p>
              <div className="social-buttons">
                <button type="button" className="social-btn google">
                  G
                </button>
                <button type="button" className="social-btn facebook">
                  f
                </button>
                <button type="button" className="social-btn twitter">
                  t
                </button>
              </div>
            </div>

            <p className="login-link">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;