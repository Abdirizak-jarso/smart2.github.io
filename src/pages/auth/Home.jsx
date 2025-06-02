import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { FaShieldAlt, FaClock, FaMoneyBillWave, FaUserFriends, FaCar, FaMobileAlt, FaLeaf } from 'react-icons/fa';
import heroImage from '../../assets/image2.png';
import "../../styles/Home.css";

function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <FaLeaf className="feature-icon" />,
      title: t('ecoFriendly'),
      description: t('ecoFriendlyDesc')
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: t('safeRides'),
      description: t('safeRidesDesc')
    },
    {
      icon: <FaClock className="feature-icon" />,
      title: t('service24'),
      description: t('service24Desc')
    },
    {
      icon: <FaMoneyBillWave className="feature-icon" />,
      title: t('affordableRates'),
      description: t('affordableRatesDesc')
    }
  ];

  return (
    <div className="home">
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1>{t('welcome')}</h1>
          <p>{t('subtitle')}</p>
          <div className="cta-buttons">
            <Link to="/register/user" className="btn btn-primary">{t('joinAsRider')}</Link>
            <Link to="/register/driver" className="btn btn-secondary">{t('becomeDriver')}</Link>
          </div>
        </div>
      </section>

      <div className="content-wrapper">
        <section className="features-section">
          <div className="section-header">
            <h2>{t('whyChoose')}</h2>
            <div className="section-underline"></div>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="how-it-works">
          <h2>{t('howItWorks')}</h2>
          <div className="steps">
            <div className="step">
              <FaMobileAlt className="step-icon" />
              <h3>{t('downloadSignup')}</h3>
              <p>{t('downloadSignupDesc')}</p>
            </div>
            <div className="step">
              <FaCar className="step-icon" />
              <h3>{t('bookRide')}</h3>
              <p>{t('bookRideDesc')}</p>
            </div>
            <div className="step">
              <FaUserFriends className="step-icon" />
              <h3>{t('enjoyRide')}</h3>
              <p>{t('enjoyRideDesc')}</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>{t('joinRevolution')}</h2>
          <p>{t('joinRevolutionDesc')}</p>
          <Link to="/register/user" className="btn btn-primary">{t('signUpRider')}</Link>
        </section>
      </div>
    </div>
  );
}

export default Home;