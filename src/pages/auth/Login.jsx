import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { FaEnvelope, FaLock, FaUser, FaArrowRight } from 'react-icons/fa';
import '../../styles/Login.css';

function Login() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log(formData);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>{t('signIn')}</h1>
          <p>{t('createAccount')}</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('enterEmail')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="password"
                id="password"
                name="password"
                placeholder={t('password')}
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
              <span>{t('rememberMe')}</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">
              {t('forgotPassword')}
            </Link>
          </div>

          <button type="submit" className="login-button">
            {t('signIn')}
          </button>
        </form>

        <div className="register-section">
          <div className="divider">
            <span>or</span>
          </div>
          <Link to="/register/user" className="register-button">
            <span>{t('createAccount')}</span>
            <FaArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
