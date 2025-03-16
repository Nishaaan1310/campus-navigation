import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <h1>Welcome Back!</h1>
          <p>We're so excited to see you again!</p>
        </div>
        
        <div className="login-right">
          <div className="login-form-container">
            <h2>Login</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-container">
                  <div className="icon-box">
                    <i className="fas fa-user"></i>
                  </div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-container">
                  <div className="icon-box">
                    <i className="fas fa-lock"></i>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="login-button">
                Login <i className="fas fa-arrow-right"></i>
              </button>

              <button 
                type="button" 
                className="admin-login-button"
                onClick={() => navigate('/admin-login')}
              >
                Admin Login <i className="fas fa-user-shield"></i>
              </button>

              <div className="social-login">
                <p>Or continue with</p>
                <div className="social-buttons">
                  <button type="button" className="social-btn google">
                    <i className="fab fa-google"></i>
                  </button>
                  <button type="button" className="social-btn facebook">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button type="button" className="social-btn twitter">
                    <i className="fab fa-twitter"></i>
                  </button>
                </div>
              </div>

              <p className="signup-link">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;