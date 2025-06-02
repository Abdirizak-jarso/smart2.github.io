import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/file.svg';
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const navItems = [
    { name: t('home'), path: '/home' },
    { name: t('aboutUs'), path: '/about' },
    { name: t('contactUs'), path: '/contact' }
  ];

  // Close dropdown when route changes
  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} className='navbar-logo' alt="" />

        <div className="navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="navbar-auth">
          <button className="language-switch" onClick={toggleLanguage}>
            {language === 'en' ? 'አማርኛ' : 'English'}
          </button>
          <Link to="/login" className="btn">{t('login')}</Link>

          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {t('register')}
            </button>

            {dropdownOpen && (
              <div className="dropdown-content">
                <Link
                  to="/register/user"
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  {t('registerAsRider')}
                </Link>
                <Link
                  to="/register/driver"
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  {t('registerAsDriver')}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
