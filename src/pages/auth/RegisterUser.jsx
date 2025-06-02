import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaIdCard } from 'react-icons/fa';
import '../../styles/Register.css';

function RegisterUser() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    idNumber: '',
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
    console.log('Registering user:', formData);
    alert('Registration successful! Please check your email to verify your account.');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-box">
          <h2>{t('createAccount')}</h2>
          <p className="register-subtitle">
            {t('alreadyHaveAccount')} <Link to="/login">{t('signIn')}</Link>
          </p>

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="fullName"
                placeholder={t('fullName')}
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder={t('emailAddress')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <FaPhone className="input-icon" />
              <input
                type="tel"
                name="phone"
                placeholder={t('phoneNumber')}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <FaIdCard className="input-icon" />
              <input
                type="text"
                name="idNumber"
                placeholder={t('idNumber')}
                value={formData.idNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder={t('password')}
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder={t('confirmPassword')}
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="register-button">
              {t('createAccount')}
            </button>
          </form>

          <p className="terms-text">
            {t('termsAgreement')} <Link to="/terms">{t('termsOfService')}</Link> {t('and')}{' '}
            <Link to="/privacy">{t('privacyPolicy')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser; 